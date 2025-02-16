import "./IndicatorItem.scss";
import { Link } from "react-router-dom";

function IndicatorItem({ indicator }) {
  return (
    <div key={indicator.id} className="indicator-container">
      <h2 className="indicator-title">{indicator.title}</h2>
      <p className="indicator-type">{indicator.type}</p>
      <Link to={`/${indicator.name}`}>
        <button className="button-green">
          <h3>VIEW</h3>
        </button>
      </Link>
    </div>
  );
}

export default IndicatorItem;
