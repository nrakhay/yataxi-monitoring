import { useRef, useCallback, useEffect, useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { Theme } from "./Theme";
import FirstLocation from "../Markers/FirstLocation";
import SecondLocation from "../Markers/SecondLocation";
// import Direction from "../../Direction/Direction";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: Theme,
};

const Map = ({
  centerAB,
  isComplete,
  pointA,
  pointB,
  zoom,
  fromInput,
  toInput,
}) => {
  const mapRef = useRef();

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <div className="component-container map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={isComplete === true ? centerAB : pointA}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {isMounted && <FirstLocation position={pointA} />}
        {isMounted && <SecondLocation position={pointB} />}
        {/* {fromInput && toInput && (
          <Direction fromInput={fromInput} toInput={toInput} />
        )} */}
      </GoogleMap>
    </div>
  );
};

export default Map;
