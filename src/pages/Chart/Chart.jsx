import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const chart = () => {
  const [price, setPrice] = useState("Loading...");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Axios request to fetch initial data from the backend API
    axios;
    //   .get("/api/price")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     setError("Error fetching initial data.");
    //     console.error(err);
    //   });

    // Connect to Socket.IO for live updates
    const socket = io(); // Automatically connects to the backend server (localhost:3000)

    socket.on("priceUpdate", (data) => {
      setPrice(`$${data.price}`);
      console.log(`Updated Price: $${data.price}`);
    });

    // Clean up the socket connection when the component unmounts
    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>BTC-USD Live Price</h1>
      {error ? <p>{error}</p> : <p>{price}</p>}
    </div>
  );
};

export default chart;
