/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useCallback, useRef } from "react";
import { toast } from "sonner";
import * as mammoth from "mammoth";
import * as pdfjsLib from "pdfjs-dist";
import Spinner from "../ui/Spinner";
import { useUpdateProfile } from "@/lib/hooks";
import { IUserProfile } from "@/lib/types";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface ValidationErrors {
  aboutMe?: string;
}

const AboutMe: React.FC<{
  user: IUserProfile;
}> = ({ user }) => {
  const { mutate, isPending } = useUpdateProfile();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [aboutMe, setAboutMe] = useState<string>(user?.about_me || "");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const extractTextFromPDF = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      text += textContent.items
        .map((item) => ("str" in item ? (item as any).str : ""))
        .join(" ");
    }

    return text;
  };

  const extractTextFromDocx = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  };

  const validate = useCallback((): boolean => {
    const newErrors: ValidationErrors = {};

    if (!aboutMe.trim()) {
      newErrors.aboutMe = "About me cannot be empty";
    } else if (aboutMe.trim().length < 10) {
      newErrors.aboutMe = "About me should be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [aboutMe]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validate()) return;

      mutate(
        { about_me: aboutMe },
        {
          onSuccess: () => {
            setIsEditing(false);
            setIsUploading(false);
          },
        }
      );
    },
    [mutate, aboutMe, validate]
  );

  const handleFileUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Invalid file type", {
          description: "Please upload PDF or Word documents only",
        });
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        toast.error("File too large", {
          description: "Maximum file size is 5MB",
        });
        return;
      }

      try {
        let extractedText = "";
        switch (file.type) {
          case "application/pdf":
            extractedText = await extractTextFromPDF(file);
            break;
          case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          case "application/msword":
            extractedText = await extractTextFromDocx(file);
            break;
        }

        extractedText = extractedText.trim().slice(0, 1000);

        if (extractedText) {
          setAboutMe(extractedText);
          setIsUploading(true);
          setIsEditing(true);
          toast.success("File uploaded successfully");
        } else {
          toast.error("Could not extract text from the file");
        }
      } catch (error) {
        console.error("File reading error:", error);
        toast.error("Error reading file", {
          description: error instanceof Error ? error.message : "Unknown error",
        });
      }
    },
    []
  );

  const handleDrop = useCallback(
    async (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const event = {
          target: { files },
        } as React.ChangeEvent<HTMLInputElement>;

        await handleFileUpload(event);
      }
    },
    [handleFileUpload]
  );

  // If user has an existing about me and not editing
  if (user?.about_me && !isEditing) {
    return (
      <div className="bg-white dark:bg-slate-950 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            About Me
          </h3>
          <button
            onClick={() => setIsEditing(true)}
            className="text-brand-blue hover:underline text-sm"
          >
            Edit
          </button>
        </div>
        <p className="text-gray-700 text-sm dark:text-gray-300">
          {user.about_me}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-950 p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
        About Me
      </h3>
      <form
        onSubmit={handleSubmit}
        className="text-xs text-gray-600 dark:text-gray-300"
      >
        <textarea
          value={aboutMe}
          onChange={(e) => {
            setAboutMe(e.target.value);
            validate();
          }}
          rows={5}
          required
          placeholder="Write about yourself..."
          className={`w-full p-2 border ${
            errors.aboutMe
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-brand-blue"
          } text-sm overflow-scroll rounded-md outline-transparent focus:ring-2`}
        />
        {errors.aboutMe && (
          <p className="text-red-500 text-xs mt-1">{errors.aboutMe}</p>
        )}
        <div className="mt-2 flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setIsUploading(false);
                setAboutMe(user?.about_me || "");
              }}
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none dark:bg-slate-700 dark:text-white dark:border-gray-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none dark:bg-slate-700 dark:text-white dark:border-gray-600"
            >
              Upload File
            </button>
          </div>
          <button
            type="submit"
            disabled={isPending || Object.keys(errors).length > 0}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue/90 focus:outline-none disabled:opacity-70"
          >
            {isPending ? <Spinner size="md" /> : "Save Changes"}
          </button>
        </div>
      </form>

      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf,.doc,.docx"
        onChange={handleFileUpload}
        className="hidden"
        id="about_me-upload"
      />

      {!isUploading && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="mt-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center"
        >
          <svg
            className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            Drag and drop your about me here, or{" "}
            <span
              onClick={() => fileInputRef.current?.click()}
              className="text-brand-blue font-medium cursor-pointer"
            >
              browse
            </span>
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Supported formats: PDF, DOCX, DOC (Max 5MB)
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
