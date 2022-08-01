import React from "react";
import From from "./Inputs/From";
import To from "./Inputs/To";

const UserInput = ({
  isLoaded,
  onFirstCoordSelect,
  onSecondCoordSelect,
  getFromInput,
  getToInput,
  handleRateChange,
  handleSearchSubmit,
  rate,
}) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="component-container user-input">
        <div className="address-container">
          <From
            {...{
              isLoaded,
              onFirstCoordSelect,
              getFromInput,
            }}
          />
          <To
            {...{
              isLoaded,
              onSecondCoordSelect,
              getToInput,
            }}
          />
        </div>
        <div className="classes-container">
          <ul>
            <li>
              <input
                type="radio"
                value="econom"
                checked={rate === "econom"}
                name="radio"
                className="class-select"
                id="econ"
                onChange={(e) => handleRateChange(e.target.value)}
              />
              <label htmlFor="econ" className="class-labels">
                Econom
              </label>
            </li>
            <li>
              <input
                type="radio"
                value="business"
                checked={rate === "business"} // business = comfort (api)
                name="radio"
                className="class-select"
                id="comf"
                onChange={(e) => handleRateChange(e.target.value)}
              />
              <label htmlFor="comf" className="class-labels">
                Comfort
              </label>
            </li>
            <li>
              <input
                type="radio"
                value="comfortplus"
                checked={rate === "comfortplus"}
                name="radio"
                className="class-select"
                id="comf-plus"
                onChange={(e) => handleRateChange(e.target.value)}
              />
              <label htmlFor="comf-plus" className="class-labels">
                Comfort+
              </label>
            </li>
            <li>
              <input
                type="radio"
                value="vip"
                checked={rate === "vip"}
                name="radio"
                className="class-select"
                id="business"
                onChange={(e) => handleRateChange(e.target.value)}
              />
              <label htmlFor="business" className="class-labels">
                Business
              </label>
            </li>
          </ul>
        </div>
        <div className="submit-container">
          <input
            type="submit"
            value="Start monitoring"
            className="search-button"
          />
        </div>
      </div>
    </form>
  );
};

export default UserInput;

/*
  rates = [
    {
      rate:1,
      rateName: "econom",
      id: ...
    },
    ...
  ]


  <>
    {rates.map(rate => 
        (<>)
      )}
  <>

*/
