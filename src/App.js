import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import Map from "./components/Map/Map";
import Prices from "./components/Prices/Prices";

function App() {
  return (
    <div className="main-container">
      <Map></Map>
      <UserInput></UserInput>
      <Prices></Prices>
    </div>
  );
}

export default App;
