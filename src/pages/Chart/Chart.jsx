import React, { useEffect, useState, useRef } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import { fetchCandles } from "../../scripts/functions";
import "./Chart.scss";

function Chart() {
  const [ohlc, setOHLC] = useState([]);
  const baseUrl = import.meta.env.VITE_APP_URL;
  const chartContainer = useRef(null);

  useEffect(() => {
    const getOHLC = async () => {
      const product_id = "BTC-USD";
      const granularity = 60;
      const data = await fetchCandles(baseUrl, product_id, granularity);
      if (data) setOHLC(data);
    };

    getOHLC();
    const interval = setInterval(() => {
      getOHLC();
      console.log("OHLC updated");
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [baseUrl]);

  useEffect(() => {
    chartContainer.remove;
    // Wait for the DOM to be ready
    setTimeout(() => {
      if (!chartContainer.current) {
        console.error("Chart container not found!");
        return;
      }
      chartContainer.current.innerHTML = "";

      console.log("Creating chart inside:", chartContainer.current);

      const chartOptions = {
        layout: {
          textColor: "#5c667e",
          background: { type: "solid", color: "#161924" },
        },
        grid: {
          vertLines: { color: "#5c667e" },
          horzLines: { color: "#5c667e" },
        },
      };
      const chart = createChart(chartContainer.current, chartOptions);
      const candlestickSeries = chart.addSeries(CandlestickSeries, {
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: true,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });

      ohlc.sort((a, b) => a.time - b.time);

      candlestickSeries.setData(ohlc);

      chart.timeScale().fitContent();
    }, 2000); // Small delay to ensure DOM is ready
  }, [ohlc]);

  if (ohlc.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <main className="chart-main">
      <section className="chart-wrapper">
        <h2 className="chart-wrapper__title">Interactive Chart</h2>

        <div className="chart-container" ref={chartContainer} />
      </section>

      <section className="price-wrapper">
        <h1 className="price-wrapper__title">Latest Price Candle</h1>
        <div className="price-container">
          <p className="price">BTC-USD, 1min</p>
          <p className="price">Open: {ohlc[0].open}</p>
          <p className="price">Close: {ohlc[0].close}</p>
          <p className="price">High: {ohlc[0].high}</p>
          <p className="price">Low: {ohlc[0].low}</p>
        </div>
      </section>
    </main>
  );
}

export default Chart;
