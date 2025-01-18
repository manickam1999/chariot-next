"use client";

import { useEffect, useState } from "react";
import React from "react";
import { Navigation2 } from "lucide-react";
import { convertDateToReadableDate } from "../../utils/helpers";
import CheckpointDrawer from "./drawers/CheckpointDrawer/CheckpointDrawer";

function SummaryWindow({
    progress,
    roadName,
    lastUpdatedAt,
}: {
    progress: number;
    roadName: string;
    lastUpdatedAt: Date;
}) {
    const [fillPercentage, setFillPercentage] = useState(0);
    const [displayText, setDisplayText] = useState<string>("");

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

    useEffect(() => {
        setDisplayText(convertDateToReadableDate(lastUpdatedAt));

        const intervalId = setInterval(() => {
            setDisplayText(convertDateToReadableDate(lastUpdatedAt));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [lastUpdatedAt]);

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
                "absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 dark:bg-primary-950 bg-primary-50 bg-opacity-70 dark:bg-opacity-70 h-auto z-50 w-11/12 md:w-1/2 lg:w-1/3 rounded-xl px-8 py-5 space-y-4 my-fade-in-up"
            }
        >
            <div className="relative items-center flex w-full justify-center">
                {/* Current Road Name */}
                <span className="text-xl text-center dark:text-primary-100 text-primary-800 font-inter">
                    {roadName}
                </span>
                <div className="flex items-center absolute right-0 justify-center">
                    <CheckpointDrawer />
                </div>
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

            {/* Info metadata. */}
            <div className="flex justify-center text-center">
                {/* Current Road Name */}
                <span className="text-sm dark:text-primary-100/80 text-primary-800/80 font-inter">
                    Last updated: {displayText}
                </span>
            </div>
        </div>
    );
}

export default SummaryWindow;
