"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.1 });

  return (
    <div
      ref={heroRef}
      className="relative pt-20 flex justify-center items-center w-full overflow-hidden"
      style={{
        backgroundImage: `url('/images/jobgee.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black/30 dark:bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.section
            className="flex flex-col items-start gap-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
          >
            <motion.h1
              className="text-white text-3xl md:text-5xl lg:text-5xl max-w-2xl font-bold font-poppins leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find your Dream Job with AI-Powered matching
            </motion.h1>
            <motion.p
              className="text-white text-base md:text-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              JobGee uses artificial intelligence to match your skills with the
              perfect job opportunities and generate tailored resumes and cover
              letters
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/upload">
                <motion.button
                  className="px-6 py-3 text-base cursor-pointer rounded-full text-white bg-brand-blue"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(53, 99, 233, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Upload Your Resume
                </motion.button>
              </Link>
            </motion.div>
          </motion.section>

          <motion.section
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
          >
            <svg
              className="w-full max-w-md h-auto"
              viewBox="0 0 500 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.rect
                x="50"
                y="50"
                width="400"
                height="300"
                rx="10"
                fill="#F1F5F9"
                stroke="#E2E8F0"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.rect
                x="80"
                y="80"
                width="150"
                height="20"
                rx="4"
                fill="#3563E9"
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  width: isInView ? 150 : 0,
                }}
                transition={{ duration: 0.7, delay: 0.6 }}
              />
              <motion.rect
                x="80"
                y="110"
                width="120"
                height="10"
                rx="2"
                fill="#CBD5E1"
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  width: isInView ? 120 : 0,
                }}
                transition={{ duration: 0.6, delay: 0.7 }}
              />
              <motion.rect
                x="80"
                y="130"
                width="140"
                height="10"
                rx="2"
                fill="#CBD5E1"
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  width: isInView ? 140 : 0,
                }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              <motion.rect
                x="80"
                y="150"
                width="100"
                height="10"
                rx="2"
                fill="#CBD5E1"
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  width: isInView ? 100 : 0,
                }}
                transition={{ duration: 0.6, delay: 0.9 }}
              />
              <motion.rect
                x="80"
                y="180"
                width="80"
                height="30"
                rx="4"
                fill="#20C997"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              />

              <motion.circle
                cx="350"
                cy="150"
                r="60"
                fill="#3563E9"
                opacity="0.1"
                initial={{ opacity: 0, r: 0 }}
                animate={{ opacity: isInView ? 0.1 : 0, r: isInView ? 60 : 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <motion.circle
                cx="350"
                cy="150"
                r="40"
                fill="#3563E9"
                opacity="0.2"
                initial={{ opacity: 0, r: 0 }}
                animate={{ opacity: isInView ? 0.2 : 0, r: isInView ? 40 : 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.circle
                cx="350"
                cy="150"
                r="20"
                fill="#3563E9"
                initial={{ opacity: 0, r: 0 }}
                animate={{ opacity: isInView ? 1 : 0, r: isInView ? 20 : 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />

              <motion.path
                d="M275 250 L425 250"
                stroke="#E2E8F0"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />

              <motion.circle
                cx="300"
                cy="250"
                r="10"
                fill="#3563E9"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
              <motion.circle
                cx="350"
                cy="250"
                r="10"
                fill="#E2E8F0"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              />
              <motion.circle
                cx="400"
                cy="250"
                r="10"
                fill="#E2E8F0"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              />

              <motion.rect
                x="270"
                y="280"
                width="160"
                height="50"
                rx="8"
                fill="#F1F5F9"
                stroke="#E2E8F0"
                strokeWidth="2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              <motion.rect
                x="290"
                y="295"
                width="120"
                height="20"
                rx="4"
                fill="#CBD5E1"
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  width: isInView ? 120 : 0,
                }}
                transition={{ duration: 0.7, delay: 1.3 }}
              />
            </svg>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
