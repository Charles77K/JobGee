import Image from "next/image";
import React from "react";

interface ITestimonials {
  image: string;
  title: string;
  role: string;
  comment: string;
}

const TestimonialCard: React.FC<ITestimonials> = ({
  image,
  title,
  role,
  comment,
}) => {
  return (
    <div className="relative rounded-lg bg-faded-blue flex-col h-full flex-center p-4">
      <div className="absolute top-[-50px] left-0 right-0 mx-auto w-[100px] h-[100px] rounded-full border-8 border-white overflow-hidden">
        <Image
          src={image}
          alt={`user-${image}`}
          width={100}
          height={100}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center mt-10 gap-5 justify-between">
        <section className="text-center">
          <p className="heading">{title}</p>
          <p className="font-thin text-gray-500">{role}</p>
        </section>
        <p className="max-w-xs text-center">&apos;{comment}&apos;</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
