import "./IndicatorItem.scss";
import chevron_right_icon from "../../assets/icons/SVG/chevron_icon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Tags from "../Tags/Tags";
import { getUser } from "../../functions/Functions";
function IndicatorItem({ indicator }) {
  const baseUrl = import.meta.env.VITE_APP_URL;
  const [user, setUser] = useState("");
  const {
    id,
    user_id,
    name,
    type,
    language,
    license,
    description,
    code,
    rating,
    rating_count,
    created_at,
  } = indicator;

  const isoString = created_at;
  const dateObj = new Date(isoString);
  const date = dateObj.toLocaleDateString("en-CA");

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(user_id, baseUrl);
      if (data) setUser(data);
    };
    fetchUser();
  }, [user_id, baseUrl, getUser]);

  return (
    <article>
      <div className="indicator-item-container">
        <section className="indicator-detail-wrapper">
          <Tags tag={license} />
        </section>
        <section className="indicator-detail-wrapper">
          <p className="indicator-detail-wrapper__p">{user}</p>
        </section>
        <Link to={`/indicator/${indicator.id}`}>
          <section className="indicator-detail-wrapper indicator-detail-wrapper__name">
            <p className="indicator-detail-wrapper__p">{name}</p>
            <img
              className="indicator-detail-wrapper__right-icon"
              src={chevron_right_icon}
            />
          </section>
        </Link>
        <section className="indicator-detail-wrapper">
          <p className="indicator-detail-wrapper__p">{type}</p>
        </section>
        <section className="indicator-detail-wrapper">
          <Tags tag={language} />
        </section>
        <section className="indicator-detail-wrapper">
          <p className="indicator-detail-wrapper__p">{date}</p>
        </section>
        <section className="indicator-detail-wrapper">
          <p className="indicator-detail-wrapper__p">{`${rating} (${rating_count} ratings)`}</p>
        </section>
      </div>
    </article>
  );
}

export default IndicatorItem;
