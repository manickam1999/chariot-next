import React, { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

function PoliceMarker({ position }: { position: LatLngExpression }) {
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

    const barrierIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path style="fill:#464655" d="M44.138 317.793v8.828c0 34.127 128.981 79.448 211.862 79.448s211.862-45.321 211.862-79.448v-8.828H44.138z"/><path style="fill:#556ea0" d="M459.034 150.069 256 105.931 52.966 150.069 0 211.862l44.138 79.448h423.724L512 211.862z"/><path style="fill:#4b5f91" d="M52.966 150.069 0 211.862l44.138 79.448H256V105.931z"/><path style="fill:#707487" d="M44.138 291.31h423.724v35.31H44.138z"/><path style="fill:#5b5d6e" d="M467.862 300.138H44.138a8.829 8.829 0 0 1 0-17.656h423.724a8.829 8.829 0 0 1 0 17.656z"/><path style="fill:#ffd782" d="M256 256c-24.376 0-44.138-19.762-44.138-44.138v-35.31a8.829 8.829 0 0 1 8.828-8.828h70.621a8.829 8.829 0 0 1 8.828 8.828v35.31C300.138 236.238 280.376 256 256 256z"/><path style="fill:#ffc36e" d="M220.69 167.724a8.829 8.829 0 0 0-8.828 8.828v35.31C211.862 236.238 231.624 256 256 256v-88.276h-35.31z"/></svg>`;

    const barrierIconSVGURL = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(barrierIconSVG)}`;

    const iconHTML = `
  <div 
    style="
    transform: scale(${scale});
      position: relative;
      width: 45px; 
      height: 45px; 
      background: #ADD8E6;
      border-radius: 50%;
      border: 4px solid #fff;
      display: flex; 
      align-items: center; 
      justify-content: center;
      box-shadow: 0 0 3px rgba(0,0,0,0.3);
    "
  >
    <img src="${barrierIconSVGURL}" style="width: 80%; height: 80%;" />
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

export default PoliceMarker;
