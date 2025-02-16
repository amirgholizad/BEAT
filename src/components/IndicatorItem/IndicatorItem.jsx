import "./IndicatorItem.scss";
import chevron_right_icon from "../../assets/icons/SVG/chevron_icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tags from "../Tags/Tags";

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
  async function getUser() {
    try {
      const res = await axios.get(`${baseUrl}/user/${user_id}`);
      setUser(res.data[0].user_name);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    // <div key={indicator.id} className="indicator-container">
    //   <p className="indicator-license">{indicator.license}</p>
    //   <h2 className="indicator-name">{indicator.name}</h2>
    //   <h3 className="indicator-author">{indicator.user}</h3>
    //   <p className="indicator-type">{indicator.type}</p>
    //   <p className="indicator-language">{indicator.language}</p>
    //   <p className="indicator-date">{indicator.date}</p>
    //   <p className="indicator-rating">{indicator.rating}</p>
    //   <Link to={`/${indicator.name}`}>
    //     <button className="button-green">
    //       <h3>VIEW</h3>
    //     </button>
    //   </Link>
    // </div>

    <article>
      <div className="indicator-item-container">
        <section className="indicator-detail-wrapper">
          <Tags tag={license} />
        </section>
        <section className="indicator-detail-wrapper">
          <Link to={`/indicator/${indicator.id}`}>
            <h3 className="indicator-detail-wrapper__item ">
              {name}
              <img
                className="indicator-detail-wrapper__right-icon"
                src={chevron_right_icon}
              />
            </h3>
          </Link>
        </section>
        <section className="indicator-detail-wrapper indicator-item-container__type">
          <p>{user}</p>
        </section>
        <section className="indicator-detail-wrapper indicator-item-container__type">
          <p>{type}</p>
        </section>
        <section className="indicator-detail-wrapper indicator-item-container__language">
          <Tags tag={language} />
        </section>
        <section className="indicator-detail-wrapper">
          <p>{created_at}</p>
        </section>
        <section className="indicator-detail-wrapper">
          <p>{`${rating} (${rating_count} ratings)`}</p>
        </section>
      </div>
    </article>
  );
}

export default IndicatorItem;
