import React, { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [showContainer, setShowContainer] = useState(false);

  const openContainer = () => {
    setShowContainer(true);
  };

  const closeContainer = () => {
    setShowContainer(false);
  };

  const handleLogout = () => {
    props.setUserData(null);
  }

  return (
    <div className="navbar">
      
      <Link className="nav-a" to='/'>
      <img height='100px' width='100px' src='mern_logo_black.png' alt='pizza-logo'/>
      </Link>
      {/* <Link className="nav-a" to="/"> Home </Link> */}
      <Link className="nav-a" to="/Pizza"> Pizzas </Link>
      <Link className="nav-a" to="/CYOP"> CYOP </Link>
      <div className="nav-a" onClick={props.userData ? handleLogout : openContainer}>
        {props.userData ? `${props.userData.user_name} Logout` : "Login"}
      </div>

      {showContainer && <Login onClose={closeContainer} userData={props.userData} setUserData={props.setUserData} />}
    </div>
  );
};

export default Nav;