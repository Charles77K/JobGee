"use client";

import React from "react";
import { HOW_IT_WORKS } from "./static";
import Card from "./Card";
import { motion as m, useInView } from "motion/react";
import { containerVariants, itemVariants } from "./ChooseUs";

const HowItWorks = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  return (
    <div
      className="bg-faded-blue dark:bg-slate-900/30 flex-center"
      ref={containerRef}
    >
      <section className="py-20">
        <m.h1
          className="text-center heading gradient-text text-2xl md:text-4xl mb-15"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          How JobGee Works
        </m.h1>
        <m.ul
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {HOW_IT_WORKS.map((item, index) => (
            <m.li key={index} variants={itemVariants}>
              <Card {...item} />
            </m.li>
          ))}
        </m.ul>
      </section>
    </div>
  );
};

export default HowItWorks;
