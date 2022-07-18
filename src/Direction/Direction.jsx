/* global google */
import { useState } from "react";
import { DirectionsRenderer } from "@react-google-maps/api";

const Direction = async ({ fromInput, toInput }) => {
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const directionsService = new google.maps.DirectionsService();

  const results = await directionsService.route({
    origin: fromInput,
    destination: toInput,
    travelMode: google.maps.TravelMode.DRIVING,
  });

  setDirectionsResponse(results);

  if (directionsResponse)
    return <DirectionsRenderer directions={directionsResponse} />;
};

export default Direction;
