import React, { useState, useEffect } from "react";
import { fetchCandles } from "../../functions/Functions";
import axios from "axios";
import "./PriceCandles.scss";

function PriceCandles() {
  const [ohlc, setOHLC] = useState([]);
  const baseUrl = import.meta.env.VITE_APP_URL;

  useEffect(() => {
    const getOHLC = async () => {
      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);

      // Format as YYYY-MM-DD for input fields
      const formatDate = (d) => d.toISOString().split("T")[0];

      const product_id = "BTC-USD";
      const granularity = 300;
      const start = formatDate(today);
      const end = formatDate(tomorrow);
      const data = await fetchCandles(
        baseUrl,
        product_id,
        granularity,
        start,
        end
      );
      if (data) setOHLC(data);
    };
    getOHLC();
    setInterval(() => {
      getOHLC();
      console.log("OHLC updated");
    }, 60 * 1000);
  }, [baseUrl, fetchCandles]);

  if (ohlc.length === 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h1>Price Candles</h1>
        <p className="candle">{ohlc[0].open}</p>
        <p className="candle">{ohlc[0].close}</p>
        <p className="candle">{ohlc[0].high}</p>
        <p className="candle">{ohlc[0].low}</p>
      </div>
    );
  }
}

export default PriceCandles;
