import "./IndicatorMarketplace.scss";
import sort_icon from "../../assets/icons/SVG/sort_icon.svg";
import IndicatorItem from "../../components/IndicatorItem/IndicatorItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchIndicators } from "../../scripts/functions";
function IndicatorMarketplace() {
  const [indicators, setIndicators] = useState([]);
  const baseUrl = import.meta.env.VITE_APP_URL;

  useEffect(() => {
    const getIndicators = async () => {
      const data = await fetchIndicators(baseUrl);
      if (data) setIndicators(data);
    };
    getIndicators();
  }, [baseUrl, fetchIndicators]);

  if (!indicators) {
    return <div>Loading...</div>;
  }
  return (
    <main className="marketplace-main">
      <section className="indicator__list">
        <div className="indicator__list__headline">
          <h1 className="indicator__list__headline__title">
            Indicator Marketplace
          </h1>

          <Link to="/indicator/create">
            <button className="indicator__list__headline__button">
              Create New Indicator
            </button>
          </Link>
        </div>

        <div className="indicator__list__filters">
          <h4>
            LICENSE <img className="sort-icon" src={sort_icon} />
          </h4>
          <h4>
            USER <img className="sort-icon" src={sort_icon} />
          </h4>
          <h4>
            NAME <img className="sort-icon" src={sort_icon} />
          </h4>
          <h4>
            TYPE <img className="sort-icon" src={sort_icon} />
          </h4>
          <h4>
            LANGUAGE <img className="sort-icon" src={sort_icon} />
          </h4>

          <h4>
            LAST UPDATED <img className="sort-icon" src={sort_icon} />
          </h4>
          <h4>
            RATING <img className="sort-icon" src={sort_icon} />
          </h4>
        </div>

        {indicators.map((indicator) => (
          <IndicatorItem key={indicator.id} indicator={indicator} />
        ))}
      </section>
    </main>
  );
}

export default IndicatorMarketplace;
