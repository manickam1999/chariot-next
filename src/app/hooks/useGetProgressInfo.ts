import locationService from "@/services/locationService";
import { useQuery } from "@tanstack/react-query";
import { TTrackerType } from "../constants/types";

export const useGetProgressInfo = (type: TTrackerType) => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["getProgressInfo", type],
    queryFn: ({ queryKey: [, type] }) =>
      locationService.getLocationByType(type as TTrackerType),
    refetchInterval: 1000 * 30,
  });

  return { data, isFetching, isError };
};
