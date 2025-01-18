import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const MapViewUpdater = ({
    vehiclePosition,
}: {
    vehiclePosition: LatLngExpression;
}) => {
    const map = useMap();

    useEffect(() => {
        if (vehiclePosition) {
            map.setView(vehiclePosition, 25);
        }
    }, [vehiclePosition, map]);

    return null;
};
