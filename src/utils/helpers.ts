import L from "leaflet";
import { TTrackerType } from "../constants/types";

export const generatePulsatingMarker = (
    trackerType: TTrackerType,
    theme?: string
) => {
    const color =
        trackerType === "kavadi"
            ? theme === "dark"
                ? "#6B7FE3"
                : "#3F51B5"
            : theme === "dark"
              ? "#BE4DFF"
              : "#9D00FF";
    const cssStyle = `
        width: 16px;
        height: 16px;
        background: ${color};
        color: ${color};
        box-shadow: 0 0 0 ${color};
      `;
    return L.divIcon({
        html: `<span style="${cssStyle}" class="pulse"/>`,
        className: "",
    });
};

export const convertDateToReadableDate = (date: Date) => {
    const now = new Date();
    const diff = (now.getTime() - date.getTime()) / 1000;

    if (diff < 5) {
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
