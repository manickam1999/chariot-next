import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Clock, MapPin } from "lucide-react";
import React from "react";

function Checkpoint({
    streetName,
    pastArrival,
    newArrival,
    delta,
}: {
    streetName: string;
    pastArrival: string;
    newArrival: string;
    delta: number;
}) {
    return (
        <div className="flex flex-col gap-y-2 items-center justify-center bg-primary-100 text-primary-850 rounded-lg px-4 py-5 w-full text-center">
            <div className="flex w-full justify-between">
                <div className="flex items-start gap-x-3">
                    <MapPin />
                    <span>{streetName}</span>
                </div>
                {delta !== 0 ? (
                    <Badge
                        className="flex gap-x-1"
                        variant={delta > 0 ? "constructive" : "destructive"}
                    >
                        {delta > 0 ? (
                            <ArrowUp size={15} />
                        ) : (
                            <ArrowDown size={15} />
                        )}
                        {Math.abs(delta)}m {delta > 0 ? "faster" : "slower"}
                    </Badge>
                ) : (
                    <Badge className="flex gap-x-1" variant="secondary">
                        <Clock size={15} /> Upcoming
                    </Badge>
                )}
            </div>
            <div className="flex bg-primary-150 rounded-lg py-5 w-full justify-between items-center px-5 text-primary-850">
                <div className="flex flex-col text-start">
                    <span className="text-sm">2025</span>
                    <span>{newArrival}</span>
                </div>
                <div className="text-end flex flex-col">
                    <span className="text-sm">2024</span>
                    <span>{pastArrival === "" ? "--.--" : pastArrival}</span>
                </div>
            </div>
        </div>
    );
}

export default Checkpoint;
