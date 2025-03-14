"use client";

import React from "react";

interface IChooseUs {
  title: string;
  icon: React.ReactElement;
  description: string;
}

const ChooseUsCard: React.FC<IChooseUs> = ({ title, icon, description }) => {
  return (
    <div className="h-full border-gray-200 p-6 rounded-xl bg-faded-blue w-full border hover:translate-y-[-10px] transition-all ease-in-out duration-300">
      {/* icon , title and description section */}
      <section className="flex flex-col gap-6 flex-grow">
        <div className="bg-faded-blue dark:bg-gray-100/10 border border-faded-blue w-[50px] h-[50px] p-3 rounded-full flex-center">
          {icon}
        </div>
        <div>
          <h2 className="heading text-xl">{title}</h2>
        </div>
        <div className="flex-grow">
          <p className="text-brand-grey dark:text-white text-base max-w-xs">
            {description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ChooseUsCard;
