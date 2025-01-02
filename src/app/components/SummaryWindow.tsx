"use client";

import { useEffect, useState } from "react";
import React from "react";
import { Navigation2 } from "lucide-react";

function SummaryWindow({
  progress,
  roadName,
}: {
  progress: number;
  roadName: string;
}) {
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const updateProgressBar = (timestamp: number) => {
      const startTime = timestamp;
      const duration = 2000;

      const animate = () => {
        const elapsed = timestamp - startTime;

        setFillPercentage(() => Number(progress));

        if (elapsed < duration) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animate();
    };

    animationFrameId = requestAnimationFrame(updateProgressBar);

    return () => cancelAnimationFrame(animationFrameId);
  }, [progress]);

  const progressBarStyles = {
    width: `${fillPercentage}%`,
    transition: "width 0.2s ease-in-out",
  };

  const navigationIconStyles = {
    left:
      fillPercentage !== 0
        ? `calc(${fillPercentage}% - 20px)`
        : `calc(${fillPercentage}% - 10px)`,
    transition: "left 0.2s ease-in-out",
  };

  return (
    <div
      className={
        "absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 dark:bg-primary-950 bg-primary-50 bg-opacity-70 dark:bg-opacity-70 h-auto z-50 w-11/12 md:w-1/2 lg:w-1/3 rounded-xl px-8 pb-10 pt-6 space-y-4 my-fade-in-up"
      }
    >
      <div className="flex items-center justify-center">
        {/* Current Road Name */}
        <span className="text-2xl dark:text-primary-100 text-primary-800 font-inter">
          {roadName}
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative w-full h-1 bg-opacity-50 rounded-full dark:bg-primary-600 bg-primary-300">
        <div
          className="absolute top-0 left-0 h-1 rounded-full bg-opacity-80 dark:bg-primary-300 bg-primary-600"
          style={progressBarStyles}
        ></div>
        <Navigation2
          className="absolute text-4xl rotate-90 -top-2.5 dark:text-primary-300 text-primary-600 fill-primary-600"
          style={navigationIconStyles}
        />
      </div>
    </div>
  );
}

export default SummaryWindow;
