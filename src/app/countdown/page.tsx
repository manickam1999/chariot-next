"use client";

import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

import CountdownButton from "../components/CountdownButton";
import Header from "../components/Header";
import Timer from "../components/Timer";
import transition from "@/hoc/transition";
import { useRouter } from "next/navigation";

type Interval = {
  day: number | string;
  hour: number | string;
  minute: number | string;
  second: number | string;
};

function Countdown(): React.JSX.Element {
  const [time, setTime] = useState<Interval>({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    getTime();
    const i = setInterval(getTime, 1000);
    return () => clearInterval(i);
  }, []);

  const router = useRouter();

  const onNextClick = () => {
    router.push("/map");
  };

  const padZero = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  const getTime = () => {
    const malaysiaTimezone = "Asia/Kuala_Lumpur";

    const launchDate = DateTime.fromObject({
      year: 2025,
      month: 2,
      day: 10,
      hour: 0,
      minute: 0,
      second: 0,
    }).setZone(malaysiaTimezone);

    const now = DateTime.now();

    const timeRemaining = launchDate.diff(now).as("milliseconds");

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    setTime({
      day: padZero(days),
      hour: padZero(hours),
      minute: padZero(minutes),
      second: padZero(seconds),
    });
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <div className="w-full h-full overflow-auto bg-auto bg-gradient-to-b from-primary-400 to-primary-150 dark:from-primary-800 dark:to-darkToBg">
        <Header />
        <div className="flex flex-col md:gap-y-24 gap-y-10">
          <div className="space-y-3 text-center">
            <div className="text-4xl font-normal lg:text-7xl xl:text-8xl font-playfair text-primary-850 dark:text-primary-150">
              We will be back.
            </div>
            <div className="text-4xl font-normal lg:text-7xl xl:text-8xl font-playfair text-primary-850 dark:text-primary-150">
              Stay tuned Penang.
            </div>
          </div>
          <div>
            <Timer time={time} />
          </div>
          <div className="flex justify-center">
            <CountdownButton text="See it in action" onClick={onNextClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(Countdown);
