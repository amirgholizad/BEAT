import "./IndicatorItem.scss";
import { Link } from "react-router-dom";

function IndicatorItem({ indicator }) {
  return (
    <div key={indicator.id} className="indicator-container">
      <p className="indicator-license">{indicator.license}</p>
      <h2 className="indicator-name">{indicator.name}</h2>
      <h3 className="indicator-author">{indicator.user}</h3>
      <p className="indicator-type">{indicator.type}</p>
      <p className="indicator-language">{indicator.language}</p>
      <p className="indicator-date">{indicator.date}</p>
      <p className="indicator-rating">{indicator.rating}</p>
      <Link to={`/${indicator.name}`}>
        <button className="button-green">
          <h3>VIEW</h3>
        </button>
      </Link>
    </div>
  );
}

export default IndicatorItem;
