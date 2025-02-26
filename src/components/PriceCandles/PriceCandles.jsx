import React, { useState, useEffect } from "react";
import { fetchCandles } from "../../scripts/functions";
import "./PriceCandles.scss";

function PriceCandles() {
  const [ohlc, setOHLC] = useState([]);
  const baseUrl = import.meta.env.VITE_APP_URL;

  useEffect(() => {
    const getOHLC = async () => {
      const product_id = "BTC-USD";
      const granularity = 60;
      const data = await fetchCandles(baseUrl, product_id, granularity);
      if (data) setOHLC(data);
    };
    getOHLC();
    setInterval(() => {
      getOHLC();
      //   console.log("OHLC updated");
    }, 3 * 1000);
  }, [baseUrl, fetchCandles]);

  if (ohlc.length === 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h1>Price Candles</h1>
        <p className="candle">Open: {ohlc[0].open}</p>
        <p className="candle">Close: {ohlc[0].close}</p>
        <p className="candle">High: {ohlc[0].high}</p>
        <p className="candle">Low: {ohlc[0].low}</p>
      </div>
    );
  }
}

export default PriceCandles;
