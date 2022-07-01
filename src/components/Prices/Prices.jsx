import React from "react";

function Prices() {
  return (
    <div className="component-container prices">
      <div className="price-output current-price-container">
        <h3 className="price-text">Начальная цена:</h3>
        <h4>1320 KZT</h4>
      </div>
      <div className="price-output updated-price-container">
        <h3 className="price-text">Обновленная цена:</h3>
        <h4>1240 KZT</h4>
      </div>
      <div className="price-output min-price">
        <h3 className="price-text">Минимальная цена:</h3>
        <h4>1110 KZT</h4>
      </div>
      <div className="price-buttons">
        <input type="submit" value={"Отменить"} />
        <input type="submit" value={"Перейти"} className="redirect-button" />
      </div>
    </div>
  );
}

export default Prices;
