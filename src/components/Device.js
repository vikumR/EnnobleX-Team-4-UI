import React, { useState, useEffect } from "react";
import axios from "axios";

const Device = ({ match }) => {
  const [device, setDevice] = useState({});

  useEffect(() => {
    getDevice();
  }, []);

  const getDevice = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/v1/devices/${match.params.id}`
    );
    setDevice(response.data);
    console.log("🚀 ~ file: Device.js ~ line 6 ~ Device ~ device", device);
  };
  return (
    <div>
      <div style={{ margin: "13px 0px" }}>
        <div
          style={{
            color: "#212121",
            fontSize: "22px",
            wordBreak: "break-word",
            wordWrap: "break-word",
          }}
        >
          {device.brand}
        </div>
      </div>
      <div>
        {device ? (
          <div className="row">
            <div className="column">
              <div>
                <div className="avatar"></div>
              </div>
            </div>
            <div className="column">
              <p className="deviceDescription">{device.assetNumber}</p>
              <p className="deviceDescription">{device.model}</p>
              <p className="deviceDescription">{device.serialNumber}</p>
              <p className="deviceDescription">{device.version}</p>
              <p className="deviceDescription">{device.note}</p>
              <p className="deviceDescription">{device.modelNumber}</p>
            </div>
          </div>
        ) : (
          <div>No device information</div>
        )}
      </div>
    </div>
  );
};

export default Device;
