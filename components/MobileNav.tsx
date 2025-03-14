import React from "react";
import { NAV_LINKS } from "./Navbar";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "./ui/button";

interface IMobileNav {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const MobileNav = ({ setIsOpen, isOpen }: IMobileNav) => {
  if (!isOpen) {
    return null;
  }

  return (
    <motion.nav
      className="fixed top-0 right-0 w-2/3 h-screen bg-brand-blue rounded-l-2xl text-white dark:text-white z-40 flex md:hidden flex-col gap-5 items-start p-6"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <ul className="flex flex-col gap-8 items-start w-full pt-6">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={label} className="w-full" onClick={() => setIsOpen(false)}>
            <Link href={href} className="text-xl font-medium block w-full">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Button className="bg-blue-500 text-xl p-6 text-white dark:text-white hover:bg-blue-700 hover:scale-x-105 cursor-pointer transition-transform">
        Get Started
      </Button>
    </motion.nav>
  );
};

export default MobileNav;
