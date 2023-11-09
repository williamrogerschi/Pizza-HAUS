import React from "react";
import './Container.css';


const CenteredContainer = ({ onClose }) => {
  return (
    <div className="centered-container">
      <div className="content">
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button onClick={onClose}>Close</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default CenteredContainer;
