import React from "react";
import From from "./Inputs/From";
import To from "./Inputs/To";

const UserInput = ({ center, isLoaded, onSelect }) => {
  return (
    <div className="component-container user-input">
      <div className="address-container">
        <From center={center} isLoaded={isLoaded} onSelect={onSelect} />
        <To isLoaded={isLoaded} onSelect={onSelect} />
      </div>
      <div className="classes-container">
        <ul>
          <li>
            <input
              type="radio"
              value="1"
              name="radio"
              className="class-select"
              id="econ"
            />
            <label htmlFor="econ" className="class-labels">
              Эконом
            </label>
          </li>
          <li>
            <input
              type="radio"
              value="2"
              name="radio"
              className="class-select"
              id="comf"
            />
            <label htmlFor="comf" className="class-labels">
              Комфорт
            </label>
          </li>
          <li>
            <input
              type="radio"
              value="3"
              name="radio"
              className="class-select"
              id="comf-plus"
            />
            <label htmlFor="comf-plus" className="class-labels">
              Комфорт+
            </label>
          </li>
          <li>
            <input
              type="radio"
              value="5"
              name="radio"
              className="class-select"
              id="business"
            />
            <label htmlFor="business" className="class-labels">
              Бизнес
            </label>
          </li>
        </ul>
      </div>
      <div className="submit-container">
        <input
          type="submit"
          value="Начать мониторинг"
          className="search-button"
        />
      </div>
    </div>
  );
};

export default UserInput;
