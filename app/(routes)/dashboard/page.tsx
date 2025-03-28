"use client";

import {
  DashboardHeader,
  DashboardTabs,
  JobMatches,
  Profile,
} from "@/components/dashboard";
import { useFetchProfile } from "@/lib/hooks";
import React from "react";

const Dashboard = () => {
  const { data } = useFetchProfile();

  const [currentPage, setCurrentPage] = React.useState<string>("profile");

  const renderPage = () => {
    switch (currentPage) {
      case "profile":
        return <Profile user={data!} />;
      case "matches":
        return <JobMatches />;
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen">
      {/* Main content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-24 p-4">
        {/* Dashboard Header */}
        <DashboardHeader />

        {/* Dashboard body */}
        <div className="bg-white dark:bg-slate-950 shadow rounded-lg">
          {/* tabs */}
          <DashboardTabs
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          {/* page content */}
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
