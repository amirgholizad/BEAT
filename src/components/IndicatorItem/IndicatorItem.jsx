import "./IndicatorItem.scss";
import chevron_right_icon from "../../assets/icons/SVG/chevron_icon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Tags from "../Tags/Tags";
import axios from "axios";

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

  async function getUser() {
    try {
      const res = await axios.get(`${baseUrl}/user/${user_id}`);
      setUser(res.data[0].user_name);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUser();
  }, [baseUrl, user_id]);
  console.log(created_at);
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
