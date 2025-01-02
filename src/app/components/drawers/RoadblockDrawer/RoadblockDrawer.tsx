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

    const roads = [
        {
            streetName: "Jalan Kebun Bunga / Lorong Air Terjun",
            duration: "10/02/2025 - 12/02/2025",
            type: "closure",
        },
        {
            streetName: "Lorong Air Terjun / Jalan Gottlieb",
            duration: "10/02/2025 - 12/02/2025",
            type: "closure",
        },
        {
            streetName: "Jalan Utama / Jalan Macalister",
            duration: "10/02/2025 - 12/02/2025",
            type: "closure",
        },
        {
            streetName: "Jalan Gotlieb / Jalan Burma",
            duration: "10/02/2025 - 12/02/2025",
            type: "control",
        },
        {
            streetName: "Jalan Brown / Jalan Tunku Abdul Rahman",
            duration: "10/02/2025 - 12/02/2025",
            type: "control",
        },
        {
            streetName: "Lorong Air Terjun",
            duration: "10/02/2025 - 12/02/2025",
            type: "control",
        },
        {
            streetName: "Jalan D.S Ramanathan / Jalan Gottlieb",
            duration: "10/02/2025 - 12/02/2025",
            type: "control",
        },
        {
            streetName: "Jalan D.S Ramanathan / Jalan Brown",
            duration: "10/02/2025 - 12/02/2025",
            type: "control",
        },
        {
            streetName: "Jalan Tunku Abdul Rahman / Jalan Brown",
            duration: "10/02/2025 - 12/02/2025",
            type: "control",
        },
        {
            streetName: "Jalan Cantonment / Jalan Tunku Abdul Rahman",
            duration: "10/02/2025 - 12/02/2025",
            type: "control",
        },
        {
            streetName: "Jalan Utama / Jalan Nunn",
            duration: "10/02/2025 - 12/02/2025",
            type: "control",
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
                        <span className="font-control opacity-60">
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
                            <label className="text-sm font-control">
                                {isDisplayedOnMap
                                    ? "Hide on Map"
                                    : "Show on Map"}
                            </label>
                        </div>
                    </DrawerTitle>
                    <Divider />
                    <div className="flex flex-col gap-y-4">
                        {roads.map((type) => (
                            <Roadblock
                                key={type.streetName}
                                streetName={type.streetName}
                                type={type.type as "closure" | "control"}
                                duration={type.duration}
                            />
                        ))}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default RoadblockDrawer;
