import React, { useRef, useEffect } from "react"; // useRef --> survive re-render cycle and refer to dom nodes
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css";

const MapComponent = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    >
      <MapContainer
        scrollWheelZoom={false}
        center={[center.lat, center.lng]}
        zoom={zoom}
        children={
          <>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[center.lat, center.lng]} icon={customIcon}>
              <Popup>This is your place</Popup>
            </Marker> */}
          </>
        }
      />
      {/* OPEN STREEN MAPS TILES */}
    </div>
  );
};

export default MapComponent;
