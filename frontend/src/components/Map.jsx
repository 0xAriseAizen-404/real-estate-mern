import { MapContainer, TileLayer, useMap } from "react-leaflet";

export const Map = () => {
  return (
    <MapContainer>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};
