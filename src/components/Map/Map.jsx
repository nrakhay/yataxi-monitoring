import React from "react";
import { GoogleMap } from "@react-google-maps/api";
import { Theme } from "./Theme";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lng: 76.90414653118162,
  lat: 43.23981336939662,
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

const Map = () => {
  const mapRef = React.useRef();

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className="component-container map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      ></GoogleMap>
    </div>
  );
};

export default Map;
