import React, { useEffect, useState, useRef } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import { fetchCandles } from "../../scripts/functions";
import Input from "../../components/Input/Input";
import "./Chart.scss";

function Chart() {
  const [ohlc, setOHLC] = useState([]);
  const baseUrl = import.meta.env.VITE_APP_URL;
  const chartContainer = useRef(null);
  const symbolOptions = ["BTC-USD", "ETH-USD"];
  const granularityOptions = [60, 300];

  const [formData, setFormData] = useState({
    symbol: "BTC-USD",
    granularity: 60,
  });

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const getOHLC = async () => {
      const product_id = formData.symbol;
      const granularity = formData.granularity;
      const data = await fetchCandles(baseUrl, product_id, granularity);
      if (data) setOHLC(data);
    };

    getOHLC();
    const interval = setInterval(() => {
      getOHLC();
      console.log("OHLC updated");
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [baseUrl, formData]);

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
        <h1 className="price-wrapper__title">Ticker Info</h1>
        <div className="price-container">
          <div className="price-container__latest">
            <h2
              className={`price-container__latest--${
                ohlc[0].close >= ohlc[0].open ? "up" : "down"
              }`}
            >
              {ohlc[0].close}
            </h2>
          </div>
          <div className="price-container__ohlc">
            <p className="price-container__ohlc--price">O: {ohlc[0].open}</p>
            <p className="price-container__ohlc--price">C: {ohlc[0].close}</p>
            <p className="price-container__ohlc--price">H: {ohlc[0].high}</p>
            <p className="price-container__ohlc--price">L: {ohlc[0].low}</p>
          </div>
          <div className="price-container__ticker">
            <p className="price-container__ticker--symbol">{formData.symbol}</p>
            <p className="price-container__ticker--time">
              {`UTC ${new Date(ohlc[0].time).getUTCHours()}: ${new Date(
                ohlc[0].time
              ).getUTCMinutes()}:00`}
            </p>
            <p className="price-container__ticker--granularity">{`${
              formData.granularity / 60
            } min`}</p>
          </div>
          <div className="price-container__settings">
            <div className="label-input-container">
              <label className="label-input-container__label" htmlFor="symbol">
                Ticker
              </label>
              <select
                className="label-input-container__input"
                name="symbol"
                id="symbol"
                value={formData.symbol}
                onChange={changeHandler}
              >
                <option value="" disabled>
                  Select a ticker...
                </option>
                {symbolOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="label-input-container__input__option"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="label-input-container">
              <label
                className="label-input-container__label"
                htmlFor="granularity"
              >
                Time frame (seconds)
              </label>
              <select
                className="label-input-container__input"
                name="granularity"
                id="granularity"
                value={formData.granularity}
                onChange={changeHandler}
              >
                <option value="" disabled>
                  Select a time frame...
                </option>
                {granularityOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="label-input-container__input__option"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* <Input
              labelName={"Ticker"}
              name="symbol"
              value={formData.symbol}
              type="dropdown"
              onChange={changeHandler}
              options={symbolOptions}
              className={"symbol"}
            />
            <Input
              labelName={"timeframe (seconds)"}
              name="granularity"
              value={formData.granularity}
              type="dropdown"
              onChange={changeHandler}
              options={granularityOptions}
              className={"granularity"}
            /> */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Chart;
