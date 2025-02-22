import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./WebSocket.scss";

const WebSocket = () => {
  const [message, setMessage] = useState("");
  const [side, setSide] = useState("");
  const [price, setPrice] = useState("");

  const socket = io("ws://localhost:3001"); // Use 'ws://' if not using socket.io

  useEffect(() => {
    // On connection
    // socket.on("connect", () => {
    //   console.log("Connected to WebSocket");
    //   socket.emit("message", "Hello from React!");
    // });

    // Listen for messages
    socket.on("priceUpdate", (data) => {
      //   console.log("Message from server:", data);
      setMessage(data);
      setPrice(data.parsedData.price);
      if (data.parsedData.side === "buy") {
        setSide("buy");
      } else {
        setSide("sell");
      }
    });
    // // Handle disconnection
    // socket.on("disconnect", () => {
    //   console.log("WebSocket disconnected");
    // });
  }, [socket]);

  return (
    <div className="trades__websocket">
      <h3
        className={`trades__websocket__price trades__websocket__price--${side}`}
      >
        {price}
        <span
          className={`trades__websocket__side trades__websocket__price--${side}`}
        >{` ${side.toUpperCase()}`}</span>
      </h3>
    </div>
  );
};

export default WebSocket;
