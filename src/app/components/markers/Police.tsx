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

    const barrierIconSVG = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!-- License: CC0. Made by SVG Repo: https://www.svgrepo.com/svg/79558/police-cap -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#464655;" d="M44.138,317.793v8.828c0,34.127,128.981,79.448,211.862,79.448s211.862-45.321,211.862-79.448v-8.828
	H44.138z"/>
<polygon style="fill:#556EA0;" points="459.034,150.069 256,105.931 52.966,150.069 0,211.862 44.138,291.31 256,291.31 
	467.862,291.31 512,211.862 "/>
<polygon style="fill:#4B5F91;" points="52.966,150.069 0,211.862 44.138,291.31 256,291.31 256,105.931 "/>
<rect x="44.138" y="291.31" style="fill:#707487;" width="423.724" height="35.31"/>
<path style="fill:#5B5D6E;" d="M467.862,300.138H44.138c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828
	h423.724c4.875,0,8.828,3.953,8.828,8.828l0,0C476.69,296.185,472.737,300.138,467.862,300.138z"/>
<path style="fill:#FFD782;" d="M256,256L256,256c-24.376,0-44.138-19.762-44.138-44.138v-35.31c0-4.875,3.953-8.828,8.828-8.828
	h70.621c4.875,0,8.828,3.953,8.828,8.828v35.31C300.138,236.238,280.376,256,256,256z"/>
<path style="fill:#FFC36E;" d="M220.69,167.724c-4.875,0-8.828,3.953-8.828,8.828v35.31C211.862,236.238,231.624,256,256,256
	v-88.276H220.69z"/>
</svg>
`;

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
    <div 
      style="
        width: 80%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      ${barrierIconSVG}
    </div>
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
