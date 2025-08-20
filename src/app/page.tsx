"use client";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="h-screen bg-black"></div>
    </div>
  );
}
