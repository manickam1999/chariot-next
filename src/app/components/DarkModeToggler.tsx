import React from "react";

import { ThemeIcon } from "@/icons/ThemeIcon";
import { useTheme } from "next-themes";

type Props = {
  className: string;
};

function DarkModeToggler({ className }: Props) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      <ThemeIcon
        fill={theme === "dark" ? "#DACBE5" : "#271832"}
        className={className}
      />
    </button>
  );
}

export default DarkModeToggler;
