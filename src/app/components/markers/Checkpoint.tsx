import React, { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

function CheckpointMarkers({
    position,
    index,
}: {
    position: LatLngExpression;
    index: number;
}) {
    const [scale, setScale] = useState(1);
    const map = useMap();

    useEffect(() => {
        const handleZoom = () => {
            const zoomLevel = map.getZoom();
            const newScale = Math.pow(0.9, 18 - zoomLevel);
            setScale(newScale);
        };

        map.on("zoom", handleZoom);
        return () => {
            map.off("zoom", handleZoom);
        };
    }, [map]);

    const iconHTML = `
        <div 
            style="
            transform: scale(${scale});
            position: relative;
            width: 45px; 
            height: 45px; 
            background: #88c1d0;
            border-radius: 50%;
            border: 4px solid #fff;
            display: flex; 
            align-items: center; 
            justify-content: center;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            box-shadow: 0 0 3px rgba(0,0,0,0.3);
            "
        >
            ${index + 1}
    <!-- A small pointer/arrow at the bottom -->
    <div style="
      position: absolute;
      bottom: -10px;
      left: 50%;           
      transform: translateX(-50%);
      width: 0; 
      height: 0; 
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #fff;  /* same color as the white border */
    "></div>
        </div>
    `;

    const icon = L.divIcon({
        html: iconHTML,
        className: "",
        iconAnchor: [22, 45],
        popupAnchor: [0, -40],
    });

    return <Marker position={position} icon={icon}></Marker>;
}

export default CheckpointMarkers;
