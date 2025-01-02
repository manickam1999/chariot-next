import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import Selectables from "../shared/Selectables";
import { TSelectableItem, TTrackerType } from "@/app/constants/types";
import { ChevronDown, OrigamiIcon, TractorIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { vehicleAtom } from "@/app/atoms/vehicle";
import Divider from "../Divider";

function TrackerTypeDrawer() {
  const [tracker, setTracker] = useAtom(vehicleAtom);

  const onItemChange = (data: string) => {
    setTracker(data as TTrackerType);
  };

  const selectableItems: TSelectableItem[] = [
    {
      title: "chariot",
      description:
        "Track the silver chariot carrying the statue of Lord Murugan.",
      logo: (
        <TractorIcon
          size={30}
          className="stroke-primary-850 dark:stroke-dark_inversed-850"
          strokeWidth={1}
        />
      ),
    },
    {
      title: "kavadi",
      description:
        "Track the devotees carrying their kavadi to witness their kavadi aatam.",
      logo: (
        <OrigamiIcon
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
            {selectableItems.find((item) => item.title === tracker)?.logo}
          </div>
          <span className="capitalize">{tracker}</span>
          <ChevronDown />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-3 w-full">
        <div className="py-5 gap-y-3 flex flex-col w-full">
          <DrawerTitle className="font-medium opacity-60 dark:opacity-100 py-3">
            Choose Tracker
          </DrawerTitle>
          <Divider />
          <Selectables
            onItemChange={onItemChange}
            items={selectableItems}
            currentValue={tracker}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default TrackerTypeDrawer;
