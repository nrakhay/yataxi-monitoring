import React from "react";

export const PopupMonitoring = ({ handleClosePopup }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <div className="popup-header">
          <h3>How To Use?</h3>
        </div>
        <div className="content">
          <p className="popup-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum
            delectus quibusdam nisi sunt dicta vitae doloribus distinctio, iusto
            quo.
          </p>
        </div>
        <div className="close">
          <button onClick={handleClosePopup}>Close</button>
        </div>
      </div>
    </div>
  );
};
