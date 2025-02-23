import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./WebSocket.scss";

const WebSocket = () => {
  const [message, setMessage] = useState("");
  const [canldeTime, setCandleTime] = useState("");
  const [open, setOpen] = useState("");
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");
  const [close, setClose] = useState("");
  const [volume, setVolume] = useState("");
  const [isFinal, setIsFinal] = useState("");
  const [side, setSide] = useState("");

  const wsUrl = import.meta.env.VITE_WS_URL;
  const socket = io(wsUrl);

  useEffect(() => {
    // On connection
    socket.on("connect", () => {
      console.log("Connected to WebSocket");
      socket.emit("message", "Hello from React!");
    });

    // Listen for messages
    socket.on("candlestickUpdate", (data) => {
      setMessage(data);
      setCandleTime(data.time);
      setOpen(data.open);
      setHigh(data.high);
      setLow(data.low);
      setClose(data.close);
      setVolume(data.volume);
      setIsFinal(data.isFinal);
      if (data.close < data.open) {
        setSide("buy");
      } else {
        setSide("sell");
      }
    });
    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("WebSocket disconnected");
    });
  }, [socket]);

  return (
    <div className="trades__websocket">
      <h3
        className={`trades__websocket__price trades__websocket__price--${side}`}
      >
        {close}
      </h3>
    </div>
  );
};

export default WebSocket;
