import { Marker } from "@react-google-maps/api";
import markerTo from "../../../../assets/new_flag.svg";

const SecondLocation = ({ position }) => {
  return (
    <Marker position={position} draggable={false} icon={{ url: markerTo }} />
  );
};

export default SecondLocation;
