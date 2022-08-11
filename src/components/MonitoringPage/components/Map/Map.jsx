/* global google */
import { useRef, useCallback, useEffect, useState } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { Theme } from "./Theme";
import FirstLocation from "../Markers/FirstLocation";
import SecondLocation from "../Markers/SecondLocation";

import { useWindowSize } from "../../../../hooks/useWindowSize";

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
  directionsResponse,
}) => {
  const { winWidth, winHeight } = useWindowSize();
  const mapRef = useRef();

  const [isMounted, setIsMounted] = useState(false);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  useEffect(() => setIsMounted(true), []);

  const getBoundsZoomLevel = () => {
    const southWest = new google.maps.LatLng(pointA.lat, pointA.lng);
    const northEast = new google.maps.LatLng(pointB.lat, pointB.lng);
    const bounds = new google.maps.LatLngBounds(northEast, southWest);
    const mapDimensions = {
      height: winHeight * 0.8,
      width: winWidth * 0.6,
    };

    const WORLD_DIM = { height: 256, width: 256 };
    const ZOOM_MAX = 19;

    function latRad(lat) {
      var sin = Math.sin((lat * Math.PI) / 180);
      var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
      return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    }

    function zoom(mapPx, worldPx, fraction) {
      return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
    }

    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();

    var latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;

    var lngDiff = ne.lng() - sw.lng();
    var lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;

    var latZoom = zoom(mapDimensions.height, WORLD_DIM.height, latFraction);
    var lngZoom = zoom(mapDimensions.width, WORLD_DIM.width, lngFraction);

    if (isNaN(latZoom)) {
      return 13;
    }

    return Math.min(latZoom, lngZoom, ZOOM_MAX);
  };

  // const ret = getBoundsZoomLevel();
  // console.log(ret);

  // console.log(pointA && pointB ? "alala" : "undefined");

  return (
    <div className="component-container map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={isComplete === true ? centerAB : pointA}
        zoom={pointA && pointB ? getBoundsZoomLevel() : zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
        id="map-component"
      >
        {isMounted && <FirstLocation position={pointA} />}
        {isMounted && <SecondLocation position={pointB} />}
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            suppressMarkers={true}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
