import React, { useState } from "react";
import CenteredContainer from "./CenteredContainer";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showContainer, setShowContainer] = useState(false);

  const openContainer = () => {
    setShowContainer(true);
  };

  const closeContainer = () => {
    setShowContainer(false);
  };

  return (
    <div className="navbar">
      <Link className="nav-a" to="/Pizza"> Pizzas </Link>
      <Link className="nav-a" to='/'>
      <img height='100px' width='100px' src='mern_logo_black.png' alt='pizza-logo'/>
      </Link>
      {/* <Link className="nav-a" to="/"> Home </Link> */}
      <Link className="nav-a" to="/CYOP"> CYOP </Link>
      <div className="nav-a" onClick={openContainer}>
        Login
      </div>

      {showContainer && <CenteredContainer onClose={closeContainer} />}
    </div>
  );
};

export default Nav;