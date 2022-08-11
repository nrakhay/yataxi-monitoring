import React, { useEffect, useState } from "react";
import axios from "axios";

const Prices = ({
  minPrice,
  startPrice,
  handleCancel,
  rate,
  coordinates,
  submitted,
  setSubmitted,
}) => {
  const API_TAXI = process.env.REACT_APP_YATAXI_API;
  const CLID_TAXI = process.env.REACT_APP_YATAXI_CLID;

  const [updPrice, setUpdPrice] = useState("");

  const updatePrice = async () => {
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
        setUpdPrice(response.data.options[0].price);
      });
  };

  let interval = null;

  useEffect(() => {
    if (submitted) {
      interval = setInterval(updatePrice, 10000);
    }
    return () => clearInterval(interval);
  }, [submitted]);

  return (
    <div className="component-container prices">
      <div className="price-output current-price-container">
        <h3 className="price-text">Starting price:</h3>
        <h4>{startPrice} KZT</h4>
      </div>
      <div className="price-output updated-price-container">
        <h3 className="price-text">Updated price:</h3>
        <h4>{updPrice} KZT</h4>
      </div>
      <div className="price-output min-price">
        <h3 className="price-text">Minimum price:</h3>
        <h4>{minPrice} KZT</h4>
      </div>
      <div className="price-buttons">
        <input
          type="submit"
          value={"Cancel"}
          onClick={() => setSubmitted(false)}
        />
        <input type="submit" value={"Open"} className="redirect-button" />
      </div>
    </div>
  );
};

export default Prices;
