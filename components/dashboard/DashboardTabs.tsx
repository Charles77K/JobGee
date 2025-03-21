"use client";

import React from "react";
import { FaUser, FaBriefcase, FaFileAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { motion as m } from "motion/react";

const tabs = [
  {
    key: "profile",
    label: "Profile & Resume",
    icon: <FaUser className="mr-2" />,
  },
  {
    key: "matches",
    label: "Job Matches",
    icon: <FaBriefcase className="mr-2" />,
  },
  {
    key: "documents",
    label: "Documents",
    icon: <FaFileAlt className="mr-2" />,
  },
  {
    key: "tracker",
    label: "Application Tracker",
    icon: <FaChartLine className="mr-2" />,
  },
];

const DashboardTabs = ({
  setCurrentPage,
  currentPage,
}: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-500">
      <div className="flex flex-wrap items-center -mb-px">
        {tabs.map(({ key, label, icon }) => (
          <m.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            key={key}
            className={`flex items-center px-4 py-4 font-poppins cursor-pointer  text-xs md:text-sm leading-5 font-medium dark:text-white hover:dark:text-white ${
              currentPage === key
                ? "border-b-2 border-brand-blue text-brand-blue"
                : "hover:border-b-1 hover:border-gray-400 text-gray-500 hover:text-black"
            }`}
            onClick={() => setCurrentPage(key)}
          >
            {icon}
            {label}
          </m.button>
        ))}
      </div>
    </div>
  );
};

export default DashboardTabs;
