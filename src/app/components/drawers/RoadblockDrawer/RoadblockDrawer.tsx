import React from "react";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Construction } from "lucide-react";
import Roadblock from "./Roadblock";
import Divider from "../../Divider";
import { Switch } from "@/components/ui/switch";
import { roadBlockAtom } from "@/atoms/road-block";
import { useAtom } from "jotai";

function RoadblockDrawer() {
    const [isDisplayedOnMap, setIsDisplayedOnMap] = useAtom(roadBlockAtom);

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
                    <Construction
                        size={18}
                        className="stroke-primary-850 dark:stroke-dark_inversed-850"
                    />
                </button>
            </DrawerTrigger>
            <DrawerContent className="px-3 w-full">
                <div className="py-5 gap-y-3 flex flex-col w-full overflow-y-auto max-h-[50%]">
                    <DrawerTitle className="py-3 flex justify-between items-center">
                        <span className="font-medium opacity-60">
                            Roadblocks
                        </span>
                        <div className="flex items-center space-x-2">
                            <Switch
                                checked={isDisplayedOnMap}
                                onCheckedChange={setIsDisplayedOnMap}
                                className="
                  relative inline-flex h-5 w-10 shrink-0 cursor-pointer 
                  rounded-full border-2 border-transparent 
                  transition-colors duration-200 ease-in-out
                  data-[state=checked]:bg-primary-500 
                  data-[state=unchecked]:bg-gray-200
                  data-[state=checked]:dark:bg-primary-600
                  data-[state=unchecked]:dark:bg-dark_inversed-800
                "
                            />
                            <label className="text-sm font-medium">
                                {isDisplayedOnMap
                                    ? "Hide on Map"
                                    : "Show on Map"}
                            </label>
                        </div>
                    </DrawerTitle>
                    <Divider />
                    <div className="flex flex-col gap-y-4">
                        {mockTraffic.map((traffic) => (
                            <Roadblock
                                key={traffic.streetName}
                                streetName={traffic.streetName}
                                traffic={
                                    traffic.traffic as "high" | "medium" | "low"
                                }
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
