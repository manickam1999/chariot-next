import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Clock, MapPin } from "lucide-react";

function formatDateAndTime(timestamp: string) {
    if (!timestamp || timestamp === "--:--") return "--:--";

    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "--:--";

    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    return date.toLocaleString("en-GB", options);
}

interface CheckpointProps {
    address: string;
    landmark?: string;
    history: { year: number; malaysia_time: string }[];
    delta: number | null;
    checkpointIndex?: number;
}

function Checkpoint({
    address,
    landmark,
    history,
    delta,
    checkpointIndex,
}: CheckpointProps) {
    const getArrivalTime = (year: number) => {
        const entry = history.find((h) => h.year === year);
        return entry ? formatDateAndTime(entry.malaysia_time) : "--:--";
    };

    const isDeltaAvailable = delta !== null && delta !== undefined;

    return (
        <div className="relative flex flex-col p-5 rounded-xl bg-white">
            {checkpointIndex !== undefined && (
                <div className="absolute -left-4 top-5 hidden md:block">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {checkpointIndex}
                    </div>
                </div>
            )}

            <div className="flex justify-between items-start gap-2 mb-3">
                <div className="flex items-center gap-2 text-lg font-semibold text-primary-900">
                    <MapPin size={18} />
                    <span>{landmark || address}</span>
                </div>
                <div>
                    {isDeltaAvailable ? (
                        <Badge
                            className="flex items-center gap-1 text-sm font-medium"
                            variant={
                                delta && delta > 0
                                    ? "destructive"
                                    : "constructive"
                            }
                        >
                            {delta && delta > 0 ? (
                                <ArrowDown size={15} />
                            ) : (
                                <ArrowUp size={15} />
                            )}
                            <span>
                                {Math.abs(delta!)}s{" "}
                                {delta! > 0 ? "slower" : "faster"}
                            </span>
                        </Badge>
                    ) : (
                        <Badge
                            className="flex items-center gap-1 text-sm font-medium"
                            variant="secondary"
                        >
                            <Clock size={15} /> Pending
                        </Badge>
                    )}
                </div>
            </div>

            {landmark && (
                <div className="mb-3 ml-6 text-sm text-primary-600 leading-tight">
                    {address}
                </div>
            )}

            <div className="bg-white/80 rounded-md px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-primary-500 uppercase">
                        2025 Arrival
                    </span>
                    <span className="text-base font-semibold text-primary-800">
                        {getArrivalTime(2025)}
                    </span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="text-xs font-medium text-primary-500 uppercase">
                        2024 Arrival
                    </span>
                    <span className="text-base font-semibold text-primary-800">
                        {getArrivalTime(2024)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Checkpoint;
