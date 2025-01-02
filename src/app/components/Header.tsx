import React from "react";

import DarkModeToggler from "./DarkModeToggler";
import { CompanyLogo } from "@/icons/CompanyLogo";
import { useTheme } from "next-themes";

function Header(): React.JSX.Element {
  const companyName: string = "ByeByte";

  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center p-10">
      <div className="flex flex-1 space-x-2 text-sm font-normal font-playfair text-primary-850 dark:text-primary-150 md:text-2xl lg:text-4xl">
        <CompanyLogo
          fill={theme === "dark" ? "#DACBE5" : "#271832"}
          className="w-7 h-7 md:w-12 md:h-12"
        />
        <span className="hidden tracking-wide xl:block"> | </span>
        <div className="hidden tracking-wide xl:block">{companyName}</div>
      </div>
      <div className="text-sm font-normal tracking-widest font-playfair text-primary-850 dark:text-primary-150 md:text-2xl lg:text-4xl">
        SILVER CHARIOT TRACKER
      </div>
      <DarkModeToggler className="w-5 h-5 transition duration-300 ease-in-out transform md:w-10 md:h-10 hover:scale-110" />
    </div>
  );
}

export default Header;
