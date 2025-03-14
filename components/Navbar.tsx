"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ui/Toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`font-poppins fixed top-0 left-0 w-full z-50 px-4 md:px-10 lg:px-32 py-6 drop-shadow-2xl transition-all duration-300 ${
          isScrolled ? "bg-transparent backdrop-blur-lg" : "bg-opacity-90"
        }`}
      >
        <nav className="flex items-center justify-between">
          <section>
            <Link
              href={"/"}
              className="text-2xl md:text-3xl font-bold text-brand-blue dark:text-white"
            >
              JobGee
            </Link>
          </section>
          <section className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsOpen((prevState) => !prevState)}
              className="relative z-50"
            >
              {isOpen ? (
                <X size={30} color="white" />
              ) : (
                <Menu size={30} color="white" />
              )}
            </motion.button>
          </section>
          <ul className="hidden md:flex gap-5 items-center">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`text-base relative font-medium text-black dark:text-white ${
                      isActive
                        ? "after:absolute hover:after:scale-x-110 after:transition-transform after:bottom-0 after:w-full after:left-0 after:h-[2px] after:bg-brand-blue"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <section className="hidden md:flex items-center gap-5">
            <Link href={"/dashboard"}>
              <Button className="bg-brand-blue text-white dark:text-white hover:scale-x-105 hover:bg-brand-blue cursor-pointer transition-transform">
                Get Started
              </Button>
            </Link>
            <ModeToggle />
          </section>
        </nav>
        <AnimatePresence>
          {isOpen && <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />}
        </AnimatePresence>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
