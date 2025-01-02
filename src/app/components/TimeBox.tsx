import React from "react";

type Props = {
  time: number | string;
  denominator: string;
};

function TimeBox({ time, denominator }: Props) {
  return (
    <div className="flex lg:flex-col lg:text-center lg:w-fit lg:m-0 lg:gap-x-auto gap-x-2 py-3 w-28">
      <div className="lg:bg-primary-850 lg:text-primary-150 font-lato lg:text-7xl xl:text-9xl rounded-lg lg:font-extrabold font-bold lg:w-40 lg:h-40 xl:w-60 xl:h-60 flex justify-center text-center items-center lg:dark:text-primary-850 dark:text-primary-150 lg:dark:bg-primary-150 text-4xl">
        {time}
      </div>
      <div className="text-primary-850 lg:text-2xl xl:text-4xl lg:pt-5 dark:text-primary-150 text-2xl flex justify-center text-center items-center start">
        {denominator}
      </div>
    </div>
  );
}

export default TimeBox;
