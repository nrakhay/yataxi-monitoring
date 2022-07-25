import React from "react";
import googleLogo from "../../assets/google-login.svg";
import "./LoginPopup.css";

export const LoginPopup = ({ toggle }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Sign in</h3>
        </div>
        <div className="btn-container">
          <button className="google-auth">
            <img src={googleLogo} alt="google logo" />
            <p className="auth-text">Google</p>
          </button>
        </div>
        <div className="cancel-container">
          <button onClick={toggle}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
