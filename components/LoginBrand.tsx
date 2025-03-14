import React from "react";
import { Box, CircleCheckBig, FileText } from "lucide-react";
import LoginDesc from "./LoginDesc";

const LoginBrand = () => {
  return (
    <section className="bg-brand-blue hidden md:flex flex-col text-white gap-10 items-start rounded-2xl p-[60px] flex-1">
      <h2 className="text-3xl header text-white">JobGee</h2>
      <h1 className="heading text-2xl leading-11 md:text-3xl max-w-md">
        Get Your Career on the Fast track
      </h1>
      <LoginDesc
        icon={<CircleCheckBig />}
        title="AI-Powered Job Matching"
        description="Find the most relevant opportunities for your skills"
      />
      <LoginDesc
        icon={<FileText />}
        title="Tailored Resume Generator"
        description="Create job-specific resumes with one click"
      />
      <LoginDesc
        icon={<Box />}
        title="Application Tracking"
        description="Manage all your jog applications in one place "
      />
    </section>
  );
};

export default LoginBrand;
