import { useRef, useCallback } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { Theme } from "./Theme";
import FirstLocation from "../Markers/FirstLocation";

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

const Map = ({ center, zoom }) => {
  const mapRef = useRef();

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className="component-container map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <FirstLocation position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
