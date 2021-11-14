import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex-container">
        <div className="card menuItemHeight">
          <Link className="menuLinks" to="/devices">
            <div className="menuLinks">
              <div className="flexCenter">Book device</div>
            </div>
          </Link>
        </div>
        <div className="card menuItemHeight">
          <div className="flexCenter">View my bookings</div>
        </div>
        <div className="card menuItemHeight">
          <div className="flexCenter">View booking requests</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
