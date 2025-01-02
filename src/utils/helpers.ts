import L from "leaflet";
import { TTrackerType } from "../constants/types";

export const generatePulsatingMarker = (trackerType: TTrackerType) => {
    const colorClass =
        trackerType === "chariot"
            ? "bg-pulsePurple shadow-pulsePurple"
            : "bg-primary-400 shadow-primary-400";
    return L.divIcon({
        className: `animate-pulseShadow block rounded-full cursor-pointer w-16 h-16 ${colorClass}`,
    });
};

export const convertDateToReadableDate = (date: Date) => {
    const now = new Date();
    const diff = (now.getTime() - date.getTime()) / 1000;

    if (diff < 1) {
        return "just now";
    } else if (diff < 60) {
        const seconds = Math.floor(diff);
        return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    } else if (diff < 3600) {
        const minutes = Math.floor(diff / 60);
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        };
        return date.toLocaleString("en-US", options);
    }
};
