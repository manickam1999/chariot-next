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

function CheckpointDrawer() {
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
                    <DrawerTitle className="py-3 flex justify-between">
                        <span className="font-medium opacity-60 dark:opacity-100 text-primary-800 dark:text-dark_inversed-800">
                            Checkpoints
                        </span>
                        <Badge>Year-Over-Year</Badge>
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
