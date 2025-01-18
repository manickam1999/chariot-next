import { vehicleAtom } from "@/atoms/vehicle";
import { TTrackerType } from "@/constants/types";
import locationService from "@/services/locationService";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";

export const useGetCheckpoints = () => {
    const [type] = useAtom(vehicleAtom);

    const { data, isFetching, isError } = useQuery({
        queryKey: ["getCheckpoints", type],
        queryFn: async ({ queryKey: [, type] }) => {
            return await locationService.getCheckpointsByType(
                type as TTrackerType
            );
        },
        refetchInterval: 1000 * 60,
        placeholderData: (prev) => prev,
    });

    return {
        data,
        isFetching,
        isError,
    };
};
