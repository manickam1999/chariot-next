import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import Selectables from "../shared/Selectables";
import { TSelectableItem } from "@/constants/types";
import { ChevronDown, ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Divider from "../Divider";

function ThemeDrawer() {
  const { theme, setTheme } = useTheme();

  const selectableItems: TSelectableItem[] = [
    {
      title: "dark",
      description: "For those who believe night is prime productivity time.",
      logo: (
        <MoonIcon
          strokeWidth={1}
          size={30}
          className="stroke-primary-850 dark:stroke-dark_inversed-850"
        />
      ),
    },
    {
      title: "light",
      description: "For those who want to be blinded by the sun at midnight.",
      logo: (
        <SunIcon
          size={30}
          strokeWidth={1}
          className="stroke-primary-850 dark:stroke-dark_inversed-850"
        />
      ),
    },
    {
      title: "system",
      description:
        "For the indecisive ones who let their OS make life decisions.",
      logo: (
        <ComputerIcon
          size={30}
          strokeWidth={1}
          className="stroke-primary-850 dark:stroke-dark_inversed-850"
        />
      ),
    },
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          <div>
            {selectableItems.find((item) => item.title === theme)?.logo}
          </div>
          <span className="capitalize">{theme}</span>
          <ChevronDown />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-3 w-full">
        <div className="py-5 gap-y-3 flex flex-col w-full">
          <DrawerTitle className="font-medium opacity-60 dark:opacity-100 py-3">
            Choose Map Mode
          </DrawerTitle>
          <Divider />
          <Selectables
            onItemChange={setTheme}
            items={selectableItems}
            currentValue={theme || "system"}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default ThemeDrawer;
