import React from "react";

interface IHowItWorks {
  number: number;
  title: string;
  description: string;
}

const Card: React.FC<IHowItWorks> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-white bg-brand-blue h-10 w-10 rounded-full flex-center font-poppins font-bold">
        {number}
      </p>
      <h1 className="text-black dark:text-white text-xl font-poppins font-semibold">
        {title}
      </h1>
      <p className="text-gray-400 text-base text-center max-w-[17rem]">
        {description}
      </p>
    </div>
  );
};

export default Card;
