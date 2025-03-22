import React, { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";
import { useUpdateProfile } from "@/lib/hooks";
import { IUserProfile } from "@/lib/types";

interface ProfileUpdateProps {
  user: IUserProfile | undefined;
}

interface FormData {
  fullname: string;
  email: string;
  about_me: string;
  phone_no: number | undefined;
}

const ProfileUpdate: React.FC<ProfileUpdateProps> = ({ user }) => {
  const { mutate, isPending } = useUpdateProfile();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    about_me: "",
    phone_no: undefined,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullname: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
        email: user.email || "",
        about_me: user.about_me || "",
        phone_no: user.phone_no,
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone_no") {
      // Convert to number or undefined if empty
      const numValue = value === "" ? undefined : Number(value);
      setFormData({ ...formData, [name]: numValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        setEditMode(false);
      },
    });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    // Reset form data when canceling edit
    if (editMode && user) {
      setFormData({
        fullname: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
        email: user.email || "",
        about_me: user.about_me || "",
        phone_no: user.phone_no,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="fullname"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          readOnly={!editMode}
          className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm ${
            editMode
              ? "focus:ring-brand-blue focus:border-brand-blue"
              : "bg-gray-100 dark:bg-slate-700"
          } dark:text-white`}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          readOnly={!editMode}
          className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm ${
            editMode
              ? "focus:ring-brand-blue focus:border-brand-blue"
              : "bg-gray-100 dark:bg-slate-700"
          } dark:text-white`}
        />
      </div>

      <div>
        <label
          htmlFor="about_me"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          About Me
        </label>
        <textarea
          id="about_me"
          name="about_me"
          value={formData.about_me}
          onChange={handleChange}
          readOnly={!editMode}
          rows={3}
          className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm ${
            editMode
              ? "focus:ring-brand-blue focus:border-brand-blue"
              : "bg-gray-100 dark:bg-slate-700"
          } dark:text-white`}
        />
      </div>

      <div>
        <label
          htmlFor="phone_no"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Phone Number
        </label>
        <input
          id="phone_no"
          type="tel"
          name="phone_no"
          value={formData.phone_no === undefined ? "" : formData.phone_no}
          onChange={handleChange}
          readOnly={!editMode}
          className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm ${
            editMode
              ? "focus:ring-brand-blue focus:border-brand-blue"
              : "bg-gray-100 dark:bg-slate-700"
          } dark:text-white`}
        />
      </div>

      <div className="flex justify-end space-x-3">
        {editMode ? (
          <>
            <button
              type="button"
              onClick={toggleEditMode}
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none dark:bg-slate-700 dark:text-white dark:border-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue/90 focus:outline-none disabled:opacity-70"
            >
              {isPending ? <Spinner size="md" /> : "Save Changes"}
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={toggleEditMode}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue/90 focus:outline-none"
          >
            Edit Profile
          </button>
        )}
      </div>
    </form>
  );
};

export default ProfileUpdate;
