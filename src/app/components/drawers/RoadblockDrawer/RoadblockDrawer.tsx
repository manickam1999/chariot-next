import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Construction } from "lucide-react";
import Roadblock from "./Roadblock";

function RoadblockDrawer() {
  /* TODO: change to actual checkpoints once endpoint is ready. */
  const mockTraffic = [
    {
      streetName: "Lebuh Penang",
      duration: "11/02/2025, 08:00 - 14/02/2025, 21:00",
      traffic: "high",
    },
    {
      streetName: "Lebuh Somewhere",
      duration: "11/02/2025, 08:00 - 14/02/2025, 21:00",
      traffic: "high",
    },
    {
      streetName: "Manickam house",
      duration: "11/02/2025, 08:00 - 14/02/2025, 21:00",
      traffic: "medium",
    },
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>
          <Construction size={18} color="#271832" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="px-3 w-full">
        <div className="py-5 gap-y-3 flex flex-col w-full overflow-y-auto max-h-[50%]">
          <DrawerTitle className="py-3 flex justify-between">
            <span className="font-medium opacity-60">Roadblocks</span>
          </DrawerTitle>
          <hr color="271832" />
          <div className="flex flex-col gap-y-4">
            {mockTraffic.map((traffic) => (
              <Roadblock
                key={traffic.streetName}
                streetName={traffic.streetName}
                traffic={traffic.traffic as "high" | "medium" | "low"}
                duration={traffic.duration}
              />
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default RoadblockDrawer;
