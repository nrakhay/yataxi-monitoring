import { useState, useCallback } from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import Map from "./components/Map/Map";
import Prices from "./components/Prices/Prices";

import { useJsApiLoader } from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_MAPS_API;

const libraries = ["places"];

const defaultCenter = {
  lat: 43.23981336939662,
  lng: 76.90414653118162,
};

const defaultZoom = 13;

function App() {
  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(defaultZoom);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback((coordinates) => {
    setCenter(coordinates);
    setZoom(15);
  }, []);

  return (
    <div className="main-container">
      {isLoaded ? <Map center={center} zoom={zoom} /> : <h2>Loading</h2>}
      <UserInput center={center} isLoaded={isLoaded} onSelect={onPlaceSelect} />
      <Prices />
    </div>
  );
}

export default App;
