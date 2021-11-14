import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Devices = () => {
  const [devices, setDevices] = useState(null);

  useEffect(() => {
    getDevices();
    console.log("devices", devices);
  }, []);

  const getDevices = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/devices");
    setDevices(response.data);
  };

  return (
    <div>
      {devices ? (
        <div className="flex-container">
          {devices.map((device) => (
            <div key={device.id} className="card">
              <div className="flexCenter">
                <div>
                  <div className="avatar"></div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p>
                    <span>{device.brand}</span>
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Link to={`/devices/${device.id}`}>
                    <div className="book-button">Book Now</div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No devices found</p>
      )}
    </div>
  );
};

export default Devices;
