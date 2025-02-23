import { use, useEffect } from "react";
import axios from "axios";
import "./Chart.scss";
import WebSocket from "../../components/WebSocket/WebSocket";
import PriceCandles from "../../components/PriceCandles/PriceCandles";

function Chart() {
  const ticker = "BTC-USD";
  const baseUrl = import.meta.env.VITE_APP_URL;
  async () => {
    try {
      await axios.post(`${baseUrl}/ticker`, { ticker: ticker });
    } catch (error) {
      console.error("Failed to fetch ticker:", error);
    }
  };

  return (
    <main className="chart-main">
      <section className="chart-and-trades">
        {/* <div className="chart">
          <h2 className="chart__title">Chart</h2>
          <PriceCandles />
        </div> */}
        <div className="trades">
          <h2 className="trades__title">Trades</h2>
          <WebSocket />
        </div>
      </section>
    </main>
  );
}

export default Chart;
