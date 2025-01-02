import L from "leaflet";

const chariotIcon = L.divIcon({
  html: `<img src="/assets/svg/chariot.svg"/>`,
  className: "chariot-svg-icon",
  iconSize: [48, 48],
  iconAnchor: [48 * 0.5, 48 * 0.5],
});

const markerIcon = L.divIcon({
  html: `<img src="/assets/svg/marker.svg"/>`,
  className: "marker-svg-icon",
  iconSize: [32, 32],
  iconAnchor: [32 * 0.5, 32 * 0.5],
});

export { chariotIcon, markerIcon };
