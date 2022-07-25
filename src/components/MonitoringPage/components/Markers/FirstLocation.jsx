import { Marker } from "@react-google-maps/api";
import Aidar from "../../../../assets/AidarVec.svg";

const FirstLocation = ({ position }) => {
  return <Marker position={position} draggable={true} icon={{ url: Aidar }} />;
};

export default FirstLocation;
