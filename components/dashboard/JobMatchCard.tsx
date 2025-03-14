import React from "react";
import { FaFile, FaRegBookmark } from "react-icons/fa";

interface IJobMatch {
  jobTitle: string;
  type: string;
  company: string;
  matchNumber: number;
  createdAt: string;
  jobDescription: string;
  stack: string[];
  salary: string;
}

const JobMatchCard: React.FC<IJobMatch> = ({
  jobTitle,
  type,
  company,
  matchNumber,
  createdAt,
  jobDescription,
  stack,
  salary,
}) => {
  return (
    <div className="job-card bg-white dark:bg-slate-950 p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg heading text-gray-900 dark:text-white">
            {jobTitle}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {company} • {type}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-400">
            {matchNumber}% Match
          </span>
          <span className="text-sm text-gray-500 mt-1">{createdAt}</span>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {jobDescription}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((item, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-500 dark:text-white text-gray-800 rounded text-xs"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <span className="text-sm font-bold tracking-tighter text-gray-900 dark:text-gray-300">
            {salary}
          </span>
          <span className="text-sm text-gray-500"> / year</span>
        </div>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
            <FaRegBookmark className="far fa-bookmark mr-1" /> Save
          </button>
          <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-brand-blue hover:bg-brand-blue/70 focus:outline-none">
            <FaFile className="mr-1" /> Generate Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobMatchCard;
