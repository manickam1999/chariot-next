import L from "leaflet";
import { TTrackerType } from "../constants/types";

export const generatePulsatingMarker = (trackerType: TTrackerType) => {
  return L.divIcon({
    className: `animate-pulseShadow block rounded-full cursor-pointer w-16 h-16 ${trackerType === "chariot" ? "bg-primary-100" : "bg-primary-400"}`,
  });
};

export const convertDateToReadableDate = (date: Date) => {
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
};
