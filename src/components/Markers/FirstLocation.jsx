import React from "react";
import { Marker } from "@react-google-maps/api";

const FirstLocation = ({ position }) => {
  return (
    <Marker
      position={position}
      icon={{ url: "/map-marker.svg" }}
      draggable={true}
    />
  );
};

export default FirstLocation;
