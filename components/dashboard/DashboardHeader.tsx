import { IUserProfile } from "@/lib/types";
import React from "react";

const DashboardHeader = ({ userData }: { userData: IUserProfile }) => {
  return (
    <div className="bg-white dark:bg-slate-900/50 rounded-lg p-6 mb-6">
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
        <header className="flex flex-col  items-start space-x-2">
          <h1 className="text-xl header md:text-2xl text-black dark:text-white">
            Welcome {userData?.first_name} {userData?.last_name}
          </h1>
          <p className="text-base text-brand-grey dark:text-white/60">
            Find, match, and apply to your perfect job
          </p>
        </header>
        {/* dashboard columns */}
        <div className="flex space-x-3">
          <div className="text-center font-poppins font-bold">
            <p className="text-brand-blue text-2xl">12</p>
            <p className="font-thin text-xs md:text-md">Jobs Matched</p>
          </div>
          <div className="text-center font-poppins font-bold">
            <p className="text-brand-blue text-2xl">5</p>
            <p className="font-thin text-xs md:text-md">Applications</p>
          </div>
          <div className="text-center font-poppins font-bold">
            <p className="text-brand-blue text-2xl">2</p>
            <p className="font-thin text-xs md:text-md">Interviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
