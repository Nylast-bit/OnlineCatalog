import React from "react";
import Tile from "./Tile";
import { getAllDevices} from "../src/server/queries/device.queries";
import { useEffect, useState } from "react";
const TileContainer = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const result = await getAllDevices();
      if (result.success) {
        setDevices(result.response);
      } else {
        console.error("Failed to fetch devices");
      }
    };

    fetchDevices();
  }, []);


  return (
    <div className="tile-container">
      {devices.map((device, index) => (
        <div key={index} className="device-tile">
          <Tile Name={device["deviceName"]} Features={device["deviceFeatures"]} Price={device["devicePrice"]} Image={device["deviceImage"]} />
        </div>
      ))}
    </div>
  );
};

export default TileContainer;