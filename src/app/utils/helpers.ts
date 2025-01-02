import L from "leaflet";
import { TTrackerType } from "../constants/types";

export const generatePulsatingMarker = (trackerType: TTrackerType) => {
  return L.divIcon({
    className: `animate-pulseShadow block rounded-full cursor-pointer w-16 h-16 ${trackerType === "chariot" ? "bg-primary-100" : "bg-primary-400"}`,
  });
};
