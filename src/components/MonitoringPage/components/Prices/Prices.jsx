import React, { useEffect, useState } from "react";
import axios from "axios";

const Prices = ({
  minPrice,
  startPrice,
  handleSearchCancel,
  rate,
  coordinates,
  submitted,
  setSubmitted,
}) => {
  const API_TAXI = process.env.REACT_APP_YATAXI_API;
  const CLID_TAXI = process.env.REACT_APP_YATAXI_CLID;

  const [updPrice, setUpdPrice] = useState("");
  const [seconds, setSeconds] = useState(5);

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

  const decrementSeconds = () => {
    setSeconds((p) => p - 1);
  };

  useEffect(() => {
    let interval = null;
    if (submitted) {
      interval = setInterval(updatePrice, 5000);
    }
    return () => clearInterval(interval);
  }, [submitted]);

  let interval = null;
  useEffect(() => {
    if (submitted) {
      interval = setInterval(decrementSeconds, 1000);
    }
    return () => clearInterval(interval);
  }, [interval]);

  useEffect(() => {
    if (seconds === 0) setSeconds(5);
  }, [seconds]);

  const secondsCounter = <h4>0:{seconds < 10 ? `0${seconds}` : seconds}</h4>;

  // const renderSeconds = updPrice ? updPrice : <h4>{secondsCounter}</h4>;
  return (
    <div className="component-container prices">
      <div className="price-output current-price-container">
        <h3 className="price-text">Starting price:</h3>
        <h4>{startPrice} KZT</h4>
      </div>
      <div className="price-output updated-price-container">
        <h3 className="price-text">Updated price:</h3>
        {updPrice && secondsCounter}
        <h4>{updPrice ? `${updPrice} KZT` : secondsCounter}</h4>
      </div>
      <div className="price-output min-price">
        <h3 className="price-text">Minimum price:</h3>
        <h4>{minPrice} KZT</h4>
      </div>
      <div className="price-buttons">
        <input type="submit" value={"Cancel"} onClick={handleSearchCancel} />
        <input type="submit" value={"Open"} className="redirect-button" />
      </div>
    </div>
  );
};

export default Prices;
