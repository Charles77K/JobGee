"use client";

import React from "react";
import { CHOOSE_US } from "./static";
import ChooseUsCard from "./ChooseUsCard";
import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6,
    },
  },
};
const ChooseUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Staggered animation variants

  return (
    <div
      className="flex flex-col p-4 items-center bg-white dark:bg-slate-900/30 justify-center py-16"
      ref={containerRef}
    >
      <m.h1
        className="font-poppins font-semibold text-3xl md:text-4xl gradient-text mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Why Choose JobGee
      </m.h1>

      <m.ul
        className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {CHOOSE_US.map((item, idx) => (
          <m.li
            variants={itemVariants}
            key={idx}
            className={`${
              idx === CHOOSE_US.length - 1 && CHOOSE_US.length % 2 !== 0
                ? "min-[480px]:col-span-2 lg:col-span-1"
                : ""
            } transform-gpu`}
          >
            <ChooseUsCard {...item} />
          </m.li>
        ))}
      </m.ul>
    </div>
  );
};

export default ChooseUs;
