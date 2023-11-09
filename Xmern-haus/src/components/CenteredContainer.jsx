import React, { useState, useEffect } from "react";
import axios from "axios";
import './Container.css';
import { BASE_URL } from '../global'


const CenteredContainer = ({ onClose }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}users/`); 
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="centered-container">
      <div className="content">
        <h2>Login</h2>
        {}
        {userData && (
          <div>
            <div>
              Username: {userData.username}
            </div>
       
            {}
          </div>
        )}
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button onClick={onClose}>Close</button>
        <button onClick={onClose}>Login</button>

      </div>
    </div>
  );
};

export default CenteredContainer;
