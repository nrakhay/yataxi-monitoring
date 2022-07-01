import React from "react";

function UserInput() {
  return (
    <div className="component-container user-input">
      <div className="address-container">
        <div className="address from-address">
          <input
            className="address-input"
            type="text"
            id="name"
            name="name"
            required
            autoComplete="off"
            placeholder="Откуда?"
          />
        </div>
        <div className="address to-address">
          <input
            className="address-input"
            type="text"
            id="name"
            name="name"
            required
            autoComplete="off"
            placeholder="Куда?"
          />
        </div>
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
            <label for="econ" className="class-labels">
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
            <label for="comf" className="class-labels">
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
            <label for="comf-plus" className="class-labels">
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
            <label for="business" className="class-labels">
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
}

export default UserInput;
