import React from "react";
import { FOOTER_LINKS } from "./static";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-slate-900 dark:bg-slate-900/50 p-4 py-14 sm:px-6 md:px-10 lg:px-32">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4😜 md:grid-cols-4 items-start">
      <section className="flex flex-col items-start gap-5">
        <h1 className="header text-white md:text-xl">JobGee</h1>
        <p className="text-white/70 max-w-xs sm:max-w-[17rem] lg:max-w-xs">
          AI-powered job matching and application assistance to help you land
          your dream job faster
        </p>
      </section>
      <section className="flex flex-col items-start gap-5">
        <h1 className="header text-white md:text-xl">Company</h1>
        <ul className="space-y-4">
          {FOOTER_LINKS.company.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} className="text-white/70">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-start gap-5">
        <h1 className="header text-white md:text-xl">Features</h1>
        <ul className="space-y-4">
          {FOOTER_LINKS.Features.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} className="text-white/70">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-start gap-5">
        <h1 className="header text-white md:text-xl">Resources</h1>
        <ul className="space-y-4">
          {FOOTER_LINKS.Resources.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} className="text-white/70">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
    <div className="bg-gray-100 h-[0.5px] my-10" />
    <section>
      <p className="text-white text-center">
        © {new Date().getFullYear()} JobGee. All rights reserved
      </p>
    </section>
  </footer>
);

export default Footer;
