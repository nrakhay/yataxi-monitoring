/* global google */

import { Marker } from "@react-google-maps/api";
import markerFrom from "../../../../assets/point-a.png";

const FirstLocation = ({ position }) => {
  return (
    <Marker position={position} draggable={false} icon={{ url: markerFrom }} />
  );
};

export default FirstLocation;
