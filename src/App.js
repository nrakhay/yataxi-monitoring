import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import Map from "./components/Map/Map";
import Prices from "./components/Prices/Prices";

import { useJsApiLoader } from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_MAPS_API;

const libraries = ["places"];

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  return (
    <div className="main-container">
      {isLoaded ? <Map /> : <h2>Loading</h2>}
      <UserInput isLoaded={isLoaded} />
      <Prices />
    </div>
  );
}

export default App;
