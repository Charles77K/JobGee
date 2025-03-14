import {
  ChooseUs,
  GetStarted,
  HeroSection,
  HowItWorks,
  Testimonials,
} from "@/components/home";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ChooseUs />
      <HowItWorks />
      <Testimonials />
      <GetStarted />
    </div>
  );
}
