import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const liColor = {
    color: "white",
    cursor: "pointer",
    textDecoration: "None"
  };
  return (
    <nav>
      <h3>
        <Link style={liColor} to="/">
          Home
        </Link>
      </h3>
      <ul className="nav-links">
        <Link to="/devices">
          <li style={liColor}>Devices</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
