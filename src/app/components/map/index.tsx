'use client';
 
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression, LatLngTuple } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

interface MapProps {
	posix: LatLngExpression | LatLngTuple;
	zoom?: number;
}

const defaults = {
	zoom: 19,
};

const Map = ({ posix, zoom = defaults.zoom }: MapProps) => {
	return (
		<div>
			<MapContainer
				center={posix}
				zoom={zoom}
				scrollWheelZoom={true}
				zoomControl={false}
				doubleClickZoom={false}
				className="absolute top-0 bottom-0 left-0 right-0 z-0"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
			</MapContainer>
		</div>
	);
};

export default Map;
