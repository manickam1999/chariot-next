import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function CountdownButton({ text, onClick }: Props) {
  return (
    <button
      className="flex items-center px-3 py-2 mb-3 text-xl transition duration-300 ease-in-out transform bg-primary-800 font-playfair md:text-2xl rounded-xl text-primary-150 md:py-3 md:px-5 hover:bg-primary-900 hover:scale-105"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center m-2 space-x-2">
        <div>{text}</div>
        <ArrowRight className="w-8 h-8 lg:mt-1" />
      </div>
    </button>
  );
}

export default CountdownButton;
