import React from "react";

const Profile = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white dark:bg-slate-950">
      {/* Personal Information */}
      <div className="col-span-1">
        <div className="bg-white dark:bg-slate-950 p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
            Personal Information
          </h3>
          <div className="flex flex-col items-center mb-4">
            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-brand-blue text-white text-2xl">
              JD
            </div>
            <button className="text-xs text-brand-blue mt-2">
              Change Photo
            </button>
          </div>
          <form>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm focus:ring-brand-blue focus:border-brand-blue dark:bg-slate-800 dark:text-white"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full  px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm focus:ring-brand-blue focus:border-brand-blue dark:bg-slate-800 dark:text-white"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Location
              </label>
              <input
                type="text"
                defaultValue="New York, NY"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm focus:ring-brand-blue focus:border-brand-blue dark:bg-slate-800 dark:text-white"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="(555) 123-4567"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm focus:ring-brand-blue focus:border-brand-blue dark:bg-slate-800 dark:text-white"
              />
            </div>
            <button
              type="button"
              className="w-full mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue/90 focus:outline-none"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>

      {/* Resume and Skills Section */}
      <div className="col-span-2">
        <div className="bg-white dark:bg-slate-950 p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
            Upload Resume
          </h3>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
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
              Drag and drop your resume here, or{" "}
              <span className="text-brand-blue font-medium">browse</span>
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Supported formats: PDF, DOCX, DOC (Max 5MB)
            </p>
            <input type="file" className="hidden" id="resume-upload" />
            <button
              type="button"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue/90 focus:outline-none"
            >
              <i className="fas fa-upload mr-2"></i> Upload Resume
            </button>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <p className="mx-4 text-gray-500 dark:text-gray-400 text-sm">or</p>
            <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <button
            type="button"
            className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none text-sm"
          >
            <i className="fas fa-pencil-alt mr-2"></i> Write/Edit Resume Text
          </button>
        </div>

        {/* skills and job preferences */}
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
            Skills & Job Preferences
          </h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Primary Skills
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-blue rounded-full text-sm flex items-center">
                Python{" "}
                <button className="ml-1 text-brand-blue hover:text-brand-blue/80">
                  ×
                </button>
              </span>
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-blue rounded-full text-sm flex items-center">
                Django{" "}
                <button className="ml-1 text-brand-blue hover:text-brand-blue/80">
                  ×
                </button>
              </span>
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-blue rounded-full text-sm flex items-center">
                JavaScript{" "}
                <button className="ml-1 text-brand-blue hover:text-brand-blue/80">
                  ×
                </button>
              </span>
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-blue rounded-full text-sm flex items-center">
                HTML/CSS{" "}
                <button className="ml-1 text-brand-blue hover:text-brand-blue/80">
                  ×
                </button>
              </span>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Add a skill..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md shadow-sm focus:outline-none text-sm focus:ring-brand-blue focus:border-brand-blue dark:bg-slate-800 dark:text-white"
              />
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-brand-blue hover:bg-brand-blue/90 focus:outline-none"
              >
                Add
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Job Title Preferences
            </label>
            <input
              type="text"
              defaultValue="Full Stack Developer, Python Developer"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm focus:ring-brand-blue focus:border-brand-blue dark:bg-slate-800 dark:text-white"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Separate multiple job titles with commas
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Location Preferences
            </label>
            <div className="flex items-center mb-2">
              <input
                id="remote"
                type="checkbox"
                className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-300 rounded"
                defaultChecked
              />
              <label
                htmlFor="remote"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
              >
                Remote
              </label>
            </div>
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm focus:ring-brand-blue focus:border-brand-blue dark:bg-slate-800 dark:text-white">
              <option>New York, NY</option>
              <option>San Francisco, CA</option>
              <option>Austin, TX</option>
              <option>+ Add Location</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Experience Level
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none text-sm focus:ring-brand-blue focus:border-brand-blue dark:bg-slate-800 dark:text-white">
              <option>Mid-Level (2-5 years)</option>
              <option>Entry Level (0-2 years)</option>
              <option>Senior (5+ years)</option>
              <option>Lead/Manager (7+ years)</option>
            </select>
          </div>
          <button type="button" className="input-btn-style">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
