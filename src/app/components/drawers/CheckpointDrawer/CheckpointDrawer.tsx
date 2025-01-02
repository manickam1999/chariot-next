import React from "react";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { Flag } from "lucide-react";
import Checkpoint from "./Checkpoint";
import Divider from "../../Divider";
import { checkpointAtom } from "@/atoms/checkpoint";
import { useAtom } from "jotai";
import { Switch } from "@/components/ui/switch";

function CheckpointDrawer() {
    const [isDisplayedOnMap, setIsDisplayedOnMap] = useAtom(checkpointAtom);

    /* TODO: change to actual checkpoints once endpoint is ready. */
    const mockCheckpoints = [
        {
            streetName: "Lebuh Penang",
            pastArrival: "7:45AM",
            newArrival: "7:00AM",
            delta: 45,
        },
        {
            streetName: "Lebuh Somewhere",
            pastArrival: "8:30AM",
            newArrival: "9:45AM",
            delta: -45,
        },
        {
            streetName: "Manickam house",
            pastArrival: "",
            newArrival: "11:00AM",
            delta: 0,
        },
    ];

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button>
                    <Flag
                        size={18}
                        className="stroke-primary-850 dark:stroke-dark_inversed-850"
                    />
                </button>
            </DrawerTrigger>
            <DrawerContent className="px-3 w-full">
                <div className="py-5 gap-y-3 flex flex-col w-full overflow-y-auto max-h-[50%]">
                    <DrawerTitle className="py-3 flex justify-between items-center">
                        <span className="font-medium opacity-60 dark:opacity-100 text-primary-800 dark:text-dark_inversed-800">
                            Checkpoints
                        </span>
                        <div className="flex items-center space-x-2">
                            <Badge>Year-Over-Year</Badge>
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
                        {mockCheckpoints.map((checkpoint) => (
                            <Checkpoint
                                key={checkpoint.streetName}
                                streetName={checkpoint.streetName}
                                pastArrival={checkpoint.pastArrival}
                                newArrival={checkpoint.newArrival}
                                delta={checkpoint.delta}
                            />
                        ))}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default CheckpointDrawer;
