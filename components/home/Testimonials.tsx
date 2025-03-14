import React from "react";
import { TESTIMONIALS } from "./static";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="flex-center bg-white dark:bg-slate-900/30 flex-col py-20 px-4">
      <h1 className="heading text-2xl md:text-4xl gradient-text">
        What Our Users Say
      </h1>
      <ul className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {TESTIMONIALS.map((item, idx) => (
          <li key={idx}>
            <TestimonialCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
