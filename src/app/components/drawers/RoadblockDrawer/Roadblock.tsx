import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import React from "react";

function Roadblock({
    streetName,
    duration,
    type,
}: {
    streetName: string;
    duration: string;
    type: "closure" | "control";
}) {
    const badgeVariant = {
        closure: "destructive",
        control: "constructive",
    };
    return (
        <div className="flex flex-col gap-y-2 bg-primary-100 text-primary-850 rounded-lg px-4 py-5 w-full text-center">
            <div className="flex w-full justify-between">
                <div className="flex items-start gap-x-3">
                    <MapPin />
                    <span>{streetName}</span>
                </div>
                <Badge
                    className="capitalize"
                    variant={
                        badgeVariant[type] as "constructive" | "destructive"
                    }
                >
                    {type}
                </Badge>
            </div>
            <div className="flex justify-start items-center text-sm gap-x-3 pl-1">
                <Clock size={15} opacity={0.4} />
                <span className="opacity-40 pl-1">{duration}</span>
            </div>
        </div>
    );
}

export default Roadblock;
