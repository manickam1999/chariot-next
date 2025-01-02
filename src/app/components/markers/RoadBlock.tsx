import React, { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
function RoadBlockMarker({ position }: { position: LatLngExpression }) {
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

    const barrierIconSVG = `
 <?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
<g>
	<path style="fill:#FB0125; stroke:#000000; stroke-width:2;" d="M88.209,465.263H45.432v-67.707v-1.858v-27.984V23.832c0-4.538,3.678-8.216,8.216-8.216h26.346
		c4.538,0,8.216,3.678,8.216,8.216v441.431H88.209z"/>
	<path style="fill:#FB0125; stroke:#000000; stroke-width:2;" d="M465.926,465.263h-42.777V23.832c0-4.538,3.678-8.216,8.216-8.216h26.346
		c4.538,0,8.216,3.678,8.216,8.216v441.431H465.926z"/>
</g>
<g>
	<rect x="423.15" y="329.845" style="fill:#BA041F; stroke:#000000; stroke-width:2;" width="42.777" height="30.389"/>
	<rect x="45.433" y="329.845" style="fill:#BA041F; stroke:#000000; stroke-width:2;" width="42.777" height="30.389"/>
</g>
<path style="fill:#CC111E; stroke:#000000; stroke-width:2;" d="M79.993,15.616H54.149c4.538,0,8.216,3.678,8.216,8.216v441.431h25.844V23.832
	C88.209,19.294,84.531,15.616,79.993,15.616z"/>
<rect x="62.369" y="329.845" style="fill:#9A0314; stroke:#000000; stroke-width:2;" width="25.844" height="30.389"/>
<path style="fill:#C7C5CB; stroke:#000000; stroke-width:2;" d="M107.889,465.263H25.752c-3.698,0-6.696,2.998-6.696,6.696v17.732c0,3.698,2.998,6.696,6.696,6.696
	h82.138c3.698,0,6.696-2.998,6.696-6.696v-17.732C114.585,468.261,111.587,465.263,107.889,465.263z"/>
<path style="fill:#AEADB3; stroke:#000000; stroke-width:2;" d="M88.209,465.263v31.123h19.68c3.698,0,6.696-2.998,6.696-6.696v-17.732
	c0-3.698-2.998-6.696-6.696-6.696L88.209,465.263L88.209,465.263z"/>
<path style="fill:#CC111E; stroke:#000000; stroke-width:2;" d="M457.71,15.616h-26.346c-0.005,0-0.011,0.001-0.015,0.001c4.53,0.009,8.2,3.683,8.2,8.215v441.431
	h26.376V23.832C465.926,19.294,462.248,15.616,457.71,15.616z"/>
<rect x="439.548" y="329.845" style="fill:#9A0314; stroke:#000000; stroke-width:2;" width="26.376" height="30.389"/>
<path style="fill:#C7C5CB; stroke:#000000; stroke-width:2;" d="M485.606,465.263h-82.138c-3.698,0-6.696,2.998-6.696,6.696v17.732c0,3.698,2.998,6.696,6.696,6.696
	h82.138c3.698,0,6.696-2.998,6.696-6.696v-17.732C492.302,468.261,489.305,465.263,485.606,465.263z"/>
<path style="fill:#FB0125; stroke:#000000; stroke-width:2;" d="M492.182,329.847H19.176c-6.316,0-11.438-5.12-11.438-11.438V66.5c0-6.316,5.12-11.438,11.438-11.438
	h473.008c6.316,0,11.438,5.12,11.438,11.438V318.41C503.62,324.727,498.5,329.847,492.182,329.847z"/>
<g>
	<polygon style="fill:#F2F2F2; stroke:#000000; stroke-width:2;" points="275.755,55.062 216.056,55.062 121.044,329.847 180.743,329.847 	"/>
	<path style="fill:#F2F2F2; stroke:#000000; stroke-width:2;" d="M7.738,96.416l14.298-41.354h-2.862c-6.316,0-11.438,5.12-11.438,11.438v29.916H7.738z"/>
	<path style="fill:#F2F2F2; stroke:#000000; stroke-width:2;" d="M89.197,55.062L7.738,290.652v27.758c0,6.316,5.12,11.438,11.438,11.438h34.709l95.012-274.785
		H89.197z"/>
	<polygon style="fill:#F2F2F2; stroke:#000000; stroke-width:2;" points="402.613,55.062 342.914,55.062 247.902,329.847 307.601,329.847 	"/>
	<path style="fill:#F2F2F2; stroke:#000000; stroke-width:2;" d="M503.62,129.827V66.5c0-6.316-5.12-11.438-11.438-11.438h-22.409l-95.012,274.785h59.699
		L503.62,129.827z"/>
</g>
</svg>
`;

    const iconHTML = `
  <div 
    style="
    transform: scale(${scale});
      position: relative;
      width: 45px; 
      height: 45px; 
      background: #ffc5b7;
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
        width: 60%;
        height: 60%;
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

export default RoadBlockMarker;
