import { Marker } from "@react-google-maps/api";
import markerTo from "../../../../assets/flag.svg";

const SecondLocation = ({ position }) => {
  return (
    <Marker position={position} draggable={true} icon={{ url: markerTo }} />
  );
};

export default SecondLocation;
