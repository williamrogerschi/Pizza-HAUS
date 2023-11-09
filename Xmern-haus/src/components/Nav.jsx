import React, { useState } from "react";
import CenteredContainer from "./CenteredContainer";

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
      {/* ...other links/buttons... */}
      <button className="nav-a" onClick={openContainer}>
        Open Container
      </button>

      {showContainer && <CenteredContainer onClose={closeContainer} />}
    </div>
  );
};

export default Nav;