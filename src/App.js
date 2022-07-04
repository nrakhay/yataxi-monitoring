import React from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import Map from "./components/Map/Map";
import Prices from "./components/Prices/Prices";

import { useJsApiLoader } from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_MAPS_API;

const libraries = ["places"];

const defaultCenter = {
  lng: 76.90414653118162,
  lat: 43.23981336939662,
};

const defaultZoom = 13;

function App() {
  const [center, setCenter] = React.useState(defaultCenter);
  const [zoom, setZoom] = React.useState(defaultZoom);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaceSelect = React.useCallback((coordinates) => {
    setCenter(coordinates);
    setZoom(15);
  }, []);

  return (
    <div className="main-container">
      {isLoaded ? <Map center={center} zoom={zoom} /> : <h2>Loading</h2>}
      <UserInput isLoaded={isLoaded} onSelect={onPlaceSelect} />
      <Prices />
    </div>
  );
}

export default App;
