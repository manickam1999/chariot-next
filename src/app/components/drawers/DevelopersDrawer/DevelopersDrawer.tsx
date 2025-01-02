import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { PersonStandingIcon } from "lucide-react";
import { DEVELOPERS } from "@/constants/developers";
import Developer from "./Developer";

function DevelopersDrawer() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button>
                    <PersonStandingIcon
                        size={18}
                        className="stroke-primary-850 dark:stroke-dark_inversed-850"
                    />
                </button>
            </DrawerTrigger>
            <DrawerContent className="px-3 w-full">
                <div className="flex flex-col py-10">
                    <DrawerTitle className="text-center pb-5">
                        The Developers
                    </DrawerTitle>
                    <div className="flex flex-col gap-y-4">
                        {DEVELOPERS.map((developer) => (
                            <Developer
                                key={developer.name}
                                developer={developer}
                            />
                        ))}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default DevelopersDrawer;
