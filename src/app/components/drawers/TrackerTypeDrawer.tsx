import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React, { useState } from "react";
import Selectables from "../shared/Selectables";
import { SelectableItem } from "@/app/constants/types";
import { ChevronDown, OrigamiIcon, TractorIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function TrackerTypeDrawer() {
  const [tracker, setTracker] = useState<"chariot" | "kavadi">("chariot");

  const onItemChange = (data: string) => {
    setTracker(data as "chariot" | "kavadi");

    /* TODO: manage tracker logic */
  };

  const selectableItems: SelectableItem[] = [
    {
      title: "chariot",
      description:
        "Track the silver chariot carrying the statue of Lord Murugan.",
      logo: <TractorIcon size={30} color="#271832" strokeWidth={1} />,
    },
    {
      title: "kavadi",
      description:
        "Track the devotees carrying their kavadi to witness their kavadi aatam.",
      logo: <OrigamiIcon size={30} strokeWidth={1} color={"#271832"} />,
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
          <DrawerTitle className="font-medium opacity-60 py-3">
            Choose Tracker
          </DrawerTitle>
          <hr color="271832" />
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
