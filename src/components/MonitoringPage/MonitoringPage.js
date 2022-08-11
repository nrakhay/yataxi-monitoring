import { useState, useEffect } from "react";

import axios from "axios";
import { useJsApiLoader } from "@react-google-maps/api";

import UserInput from "./components/UserInput/UserInput";
import Map from "./components/Map/Map";
import Prices from "./components/Prices/Prices";

import getBrowserLocation from "../../utils/geolocation";
import { middlePoint } from "../../utils/midpoint";

import "./Monitoring.css";

const API_MAPS = process.env.REACT_APP_MAPS_API;
const API_TAXI = process.env.REACT_APP_YATAXI_API;
const CLID_TAXI = process.env.REACT_APP_YATAXI_CLID;

const libraries = ["places"];

const defaultCenter = {
  lat: 43.23981336939662,
  lng: 76.90414653118162,
};

const defaultZoom = 13;

export const Monitoring = () => {
  const [centerAB, setCenterAB] = useState(defaultCenter);
  const [isComplete, setIsComplete] = useState("false");
  const [pointA, setPointA] = useState(undefined);
  const [pointB, setPointB] = useState(undefined);
  const [zoom, setZoom] = useState(defaultZoom);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [rate, setRate] = useState("econom");
  const [fromLat, setFromLat] = useState("");
  const [fromLng, setFromLng] = useState("");
  const [toLat, setToLat] = useState("");
  const [toLng, setToLng] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_MAPS,
    libraries,
  });

  const onFirstCoordSelect = (coordinates) => {
    setPointA(coordinates);
    setZoom(15);
    setFromLat(coordinates.lat);
    setFromLng(coordinates.lng);
  };

  const onSecondCoordSelect = (coordinates) => {
    setPointB(coordinates);
    // setZoom(15);
    setToLat(coordinates.lat);
    setToLng(coordinates.lng);
  };

  useEffect(() => {
    if (fromLat && fromLng && toLat && toLng) {
      const midLng = middlePoint(fromLat, fromLng, toLat, toLng)[0];
      const midLat = middlePoint(fromLat, fromLng, toLat, toLng)[1];

      setCenterAB({ lat: midLat, lng: midLng });

      setIsComplete(true);
    }
  }, [fromLat, fromLng, toLat, toLng]);

  useEffect(() => {
    getBrowserLocation()
      .then((userLoc) => {
        setPointA(userLoc);
      })
      .catch((defaultLocation) => {
        setPointA(defaultLocation);
      });
  }, []);

  const getFromInput = (val) => {
    setFromInput(val);
  };

  const getToInput = (val) => {
    setToInput(val);
  };

  const handleRateChange = (val) => {
    setRate(val);
  };

  const handleCancel = () => {
    setSubmitted(false);
  };

  const coordinates = fromLng + "," + fromLat + "~" + toLng + "," + toLat;

  const handleSearchSubmit = async (e) => {
    e.preventDefault(); // no refresh
    console.log();
    await axios
      .get(`https://taxi-routeinfo.taxi.yandex.net/taxi_info`, {
        params: {
          rll: coordinates,
          clid: CLID_TAXI,
          apikey: API_TAXI,
          class: rate,
        },
        headers: {
          Accept: "*/*",
        },
      })
      .then((response) => {
        setMinPrice(response.data.options[0].min_price);
        setStartPrice(response.data.options[0].price);
      });

    setSubmitted(true);
  };

  return (
    <div className="main-container">
      {isLoaded ? (
        <Map
          {...{
            centerAB,
            pointA,
            pointB,
            isComplete,
            zoom,
            fromInput,
            toInput,
          }}
        />
      ) : (
        <h2>Loading</h2>
      )}
      <UserInput
        {...{
          isLoaded,
          getFromInput,
          getToInput,
          handleRateChange,
          handleSearchSubmit,
          rate,
          onFirstCoordSelect,
          onSecondCoordSelect,
        }}
      />
      {submitted && (
        <Prices
          {...{
            minPrice,
            startPrice,
            handleCancel,
            rate,
            coordinates,
            submitted,
            setSubmitted,
          }}
        />
      )}
    </div>
  );
};
