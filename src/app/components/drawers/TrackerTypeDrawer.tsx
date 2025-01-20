import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import Selectables from "../shared/Selectables";
import { TSelectableItem, TTrackerType } from "@/constants/types";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { vehicleAtom } from "@/atoms/vehicle";
import Divider from "../Divider";
import ChariotIcon from "../icons/Chariot";
import KavadiIcon from "../icons/Kavadi";

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
                <ChariotIcon className="fill-primary-800 dark:fill-primary-250 w-16 h-16" />
            ),
        },
        {
            title: "kavadi",
            description:
                "Track the devotees carrying their kavadi to witness their kavadi aatam ahead of the silver chariot.",
            logo: (
                <KavadiIcon className="fill-primary-800 dark:fill-primary-250 w-16 h-16" />
            ),
        },
    ];

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button>
                    <div>
                        {
                            selectableItems.find(
                                (item) => item.title === tracker
                            )?.logo
                        }
                    </div>
                    <span className="capitalize">{tracker}</span>
                    <ChevronDown />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="px-3 w-full">
                <div className="py-5 gap-y-3 flex flex-col w-full">
                    <DrawerTitle className="font-control opacity-70 dark:opacity-90 py-3">
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
