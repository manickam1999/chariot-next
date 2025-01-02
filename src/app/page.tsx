"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import TextScrambleComponent from "./components/ScrambleText";
import transition from "@/hoc/transition";

function Splash() {
  const router = useRouter();

  useEffect(() => {
    const offset = 8 * 60;
    const currentDate = new Date(new Date().getTime() + offset * 60 * 1000);
    const targetDate = new Date(
      Date.UTC(2025, 1, 10, 0, 0, 0) - offset * 60 * 1000,
    );

    const timer = setTimeout(() => {
      if (currentDate < targetDate) {
        router.push("/countdown");
      } else {
        router.push("/map");
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <div className="flex items-center justify-center w-full h-full bg-primary-50">
        <TextScrambleComponent
          phrases={["ByeByte", "Chariot Tracker"]}
          className="text-xl tracking-widest md:text-2xl lg:text-4xl font-extralight font-playfair text-primary-850"
        />
      </div>
    </div>
  );
}

export default transition(Splash);
