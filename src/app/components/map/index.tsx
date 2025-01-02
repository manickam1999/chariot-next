"use client";

import React, { useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Navbar from "../navigation/Navbar";
import RightNavbar from "../navigation/RightNavbar";
import SummaryWindow from "../SummaryWindow";
import AntPath from "./AntPath";
import {
    DEPARTURE_COORDINATES,
    MAP_COORDINATES,
} from "@/constants/coordinates";
import { useTheme } from "next-themes";
import { markerIcon } from "@/constants/icons";
import { vehicleAtom } from "@/atoms/vehicle";
import { useAtom } from "jotai";
import { useGetProgressInfo } from "@/hooks/useGetProgressInfo";
import { generatePulsatingMarker } from "@/utils/helpers";

interface MapProps {
    posix: LatLngExpression | LatLngTuple;
    zoom?: number;
}

const defaults = {
    zoom: 19,
};

const Map = ({ posix, zoom = defaults.zoom }: MapProps) => {
    const { theme } = useTheme();
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [polylineCoords, setPolylineCoords] = useState<number[][]>(
        DEPARTURE_COORDINATES
    );

    const [tracker] = useAtom(vehicleAtom);
    const { data, vehiclePosition, lastUpdatedAt } =
        useGetProgressInfo(tracker);

    const fallback = {
        progress: 0,
        roadName: "Loading...",
    };

    const { progress, roadName } = data || fallback;

    return (
        <div>
            <SummaryWindow
                progress={Number(progress)}
                roadName={roadName}
                lastUpdatedAt={lastUpdatedAt}
            />
            <MapContainer
                center={posix}
                zoom={zoom}
                scrollWheelZoom={true}
                zoomControl={false}
                doubleClickZoom={false}
                className="fixed top-0 bottom-0 left-0 right-0 z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    className="z-0 dark:hue-rotate-180 dark:invert dark:grayscale-[50%]"
                />

                <AntPath
                    positions={polylineCoords}
                    options={{
                        delay: 800,
                        hardwareAccelerated: true,
                    }}
                    pathOptions={{
                        color: theme === "dark" ? "#342043" : "#B497CB",
                        pulseColor: theme === "dark" ? "#B497CB" : "#684186",
                    }}
                />

                {/* Start Pin  */}
                <Marker
                    position={MAP_COORDINATES.start}
                    icon={markerIcon}
                ></Marker>

                {/* End Pin */}
                <Marker
                    position={MAP_COORDINATES.end}
                    icon={markerIcon}
                ></Marker>

                {/* Chariot Pulsating Pin */}
                <Marker
                    position={vehiclePosition}
                    icon={generatePulsatingMarker(tracker)}
                ></Marker>
                <Navbar />
                <RightNavbar />
            </MapContainer>
        </div>
    );
};

export default Map;
