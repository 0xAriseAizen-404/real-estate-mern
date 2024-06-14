import { MapContainer, TileLayer } from "react-leaflet";
import { GeoCoderMarker } from "../common/GeoCoderMarker";

export const Map = ({ address, city, country }) => {
  return (
    <MapContainer
      zoom={1}
      scrollWheelZoom={false}
      center={[51.505, -0.09]}
      style={{
        height: "100%",
        width: "100%",
        zIndex: "0",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};
