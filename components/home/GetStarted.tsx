"use client";

import React from "react";
import { motion as m } from "motion/react";
const GetStarted = () => {
  return (
    <div
      className="bg-white dark:bg-slate-900/30"
      style={{
        backgroundImage: `url('/images/dream-job.jpg')`,
        backgroundSize: "cover",
        display: "flex",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <section className="relative z-50 text-white gap-7 flex-center flex-col py-32">
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
          className="heading text-3xl text-center md:text-4xl"
        >
          Ready to Land Your Dream Job?
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeIn" },
          }}
          className="max-w-lg text-center"
        >
          Join thousands of job seekers who have found their perfect match with
          JobGee&apos;s AI-Powered platform
        </m.p>
        <m.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeIn" },
          }}
          className="px-6 py-3 text-base cursor-pointer rounded-full text-white bg-brand-blue"
        >
          Get Started for Free
        </m.button>
      </section>
    </div>
  );
};

export default GetStarted;
