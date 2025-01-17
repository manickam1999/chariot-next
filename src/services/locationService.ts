import {
    TCheckpointsResponse,
    TLocationResponse,
    TTrackerType,
} from "@/constants/types";
import { env } from "@/env";

class LocationService {
    async getLocationByType(type: TTrackerType): Promise<TLocationResponse> {
        const response = await fetch(
            `${env.NEXT_PUBLIC_API_URL}/api/location?type=${type.toUpperCase()}`
        );
        if (!response.ok) {
            throw new Error("Something went wrong while fetching location.");
        }
        return await response.json();
    }

    async getCheckpointsByType(
        type: TTrackerType
    ): Promise<[TCheckpointsResponse]> {
        const response = await fetch(
            `${env.NEXT_PUBLIC_API_URL}/api/checkpoint?type=${type.toUpperCase()}`
        );

        if (!response.ok) {
            throw new Error("Something went wrong while fetching checkpoints.");
        }

        return await response.json();
    }
}

const locationService = new LocationService();

export default locationService;
