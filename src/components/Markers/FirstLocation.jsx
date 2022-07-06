import { Marker } from "@react-google-maps/api";

const FirstLocation = ({ position }) => {
  console.log(position);
  return <Marker position={position} draggable={true} />;
};

export default FirstLocation;
