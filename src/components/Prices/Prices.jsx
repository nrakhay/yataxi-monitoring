import React from "react";

const Prices = ({ minPrice, curPrice, handleCancel }) => {
  return (
    <div className="component-container prices">
      <div className="price-output current-price-container">
        <h3 className="price-text">Начальная цена:</h3>
        <h4>{curPrice} KZT</h4>
      </div>
      <div className="price-output updated-price-container">
        <h3 className="price-text">Обновленная цена:</h3>
        <h4>{curPrice} KZT</h4>
      </div>
      <div className="price-output min-price">
        <h3 className="price-text">Минимальная цена:</h3>
        <h4>{minPrice} KZT</h4>
      </div>
      <div className="price-buttons">
        <input type="submit" value={"Отменить"} onClick={handleCancel} />
        <input type="submit" value={"Перейти"} className="redirect-button" />
      </div>
    </div>
  );
};

export default Prices;
