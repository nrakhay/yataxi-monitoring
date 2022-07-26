import { Marker } from "@react-google-maps/api";
import markerFrom from "../../../../assets/marker.svg";

const FirstLocation = ({ position }) => {
  return (
    <Marker position={position} draggable={true} icon={{ url: markerFrom }} />
  );
};

export default FirstLocation;
