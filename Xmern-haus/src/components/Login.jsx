import React, { useState, useEffect } from "react";
import axios from "axios";
import './Container.css';
import { BASE_URL } from '../global'


const Login = (props) => {
  const [userData, setUserData] = useState(null);  
  const [username, setUsername] = useState('');

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

  const loginUser = () => {
    console.log('Login Started..')
    
    for (let i = 0; i < userData.length; i++) {
      if (username == userData[i].user_name) {
          console.log('user logged in: ', userData[i])
          props.setUserData(userData[i])
          console.log('user State: ', props.userData)
          props.onClose()
          break;
      } else {
          console.log('user not found')
      }
    }
    
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


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
          <input 
            type="text" 
            id="username" 
            onChange={handleUsernameChange} 
            value={username} 
            placeholder="Enter your username" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button onClick={props.onClose}>Close</button>
        <button onClick={() => loginUser()}>Login</button>

      </div>
    </div>
  );
};

export default Login;
