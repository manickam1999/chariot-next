import locationService from "@/services/locationService";
import { useQuery } from "@tanstack/react-query";
import { TTrackerType } from "../constants/types";
import { MAP_COORDINATES } from "../constants/coordinates";
import { useState } from "react";

export const useGetProgressInfo = (type: TTrackerType) => {
  const [vehiclePosition, setVehiclePosition] = useState<{
    lat: number;
    lng: number;
  }>({ lat: MAP_COORDINATES.start[0], lng: MAP_COORDINATES.start[1] });
  const [lastUpdatedAt, setLastUpdatedAt] = useState<Date>(new Date());

  const { data, isFetching, isError } = useQuery({
    queryKey: ["getProgressInfo", type],
    queryFn: async ({ queryKey: [, type] }) => {
      const location = await locationService.getLocationByType(
        type as TTrackerType,
      );

      /* Updating time after fetching data. */
      if (location) {
        setLastUpdatedAt(new Date());
        setVehiclePosition({ lat: location.latitude, lng: location.longitude });
      }

      return location;
    },
    refetchInterval: 1000 * 30,
  });

  return { data, isFetching, isError, vehiclePosition, lastUpdatedAt };
};
