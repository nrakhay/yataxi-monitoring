import { Marker } from "@react-google-maps/api";
import Aidar from "../../../../assets/AidarVec.svg";

const SecondLocation = ({ position }) => {
  return <Marker position={position} draggable={true} icon={{ url: Aidar }} />;
};

export default SecondLocation;
