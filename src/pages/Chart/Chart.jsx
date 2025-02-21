import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const WebSocketComponent = () => {
  const [message, setMessage] = useState("");
  const socket = io("ws://localhost:3001"); // Use 'ws://' if not using socket.io

  useEffect(() => {
    // On connection
    socket.on("connect", () => {
      console.log("Connected to WebSocket");
      socket.emit("message", "Hello from React!");
    });

    // Listen for messages
    socket.on("priceUpdate", (data) => {
      //   console.log("Message from server:", data);
      setMessage(data);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("WebSocket disconnected");
    });
  }, [socket]);

  return (
    <div>
      <h2>WebSocket Message:</h2>
      <p>{message.price}</p>
    </div>
  );
};

export default WebSocketComponent;
