import { ReactNode } from "react";

export type TSelectableItem = {
    title: string;
    description: string;
    logo: ReactNode;
};

export type TLocationResponse = {
    _id: string;
    timestamp: string;
    accuracy: number;
    age: number;
    latitude: number;
    longitude: number;
    speed: number;
    speed_accuracy: number;
    type: TTrackerType;
    isMapping: boolean;
    roadName: string;
    created_at: string;
    __v: number;
    ori_lat: number;
    ori_lon: number;
    ori_roadName: string;
    progress: string;
};

export type TTrackerType = "chariot" | "kavadi";
