import React from "react";

import TimeBox from "./TimeBox";
import { HalfBoxLM } from "@/icons/HalfBoxLM";
import { HalfBoxDM } from "@/icons/HalfBoxDM";

type Props = {
  time: {
    day: number | string;
    hour: number | string;
    minute: number | string;
    second: number | string;
  };
};

function Timer({ time }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <HalfBoxLM className="lg:hidden dark:hidden" />
      <HalfBoxDM className="lg:hidden dark:flex hidden lg:dark:hidden" />
      <div className="-mt-12 -mb-12 lg:flex lg:flex-row lg:gap-x-10">
        <TimeBox time={time.day} denominator="days" />
        <TimeBox time={time.hour} denominator="hours" />
        <TimeBox time={time.minute} denominator="minutes" />
        <TimeBox time={time.second} denominator="seconds" />
      </div>
      <HalfBoxDM className="lg:hidden dark:flex rotate-180 hidden lg:dark:hidden" />
      <HalfBoxLM className="rotate-180 lg:hidden dark:hidden" />
    </div>
  );
}

export default Timer;
