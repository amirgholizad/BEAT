import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchIndicatorWithUser } from "../../functions/Functions";
import Tags from "../../components/Tags/Tags";
import "./IndicatorDetails.scss";
import { use } from "react";
function IndicatorDetails() {
  const baseUrl = import.meta.env.VITE_APP_URL;
  const id = useParams().id;
  const [user, setUser] = useState({});
  const [indicator, setIndicator] = useState({});
  const [toggleCode, setToggleCode] = useState(false);
  const [toggleDescription, setToggleDescription] = useState(false);

  useEffect(() => {
    const getIndicatorDetails = async () => {
      const data = await fetchIndicatorWithUser(id, baseUrl);
      if (data) setIndicator(data);
    };
    getIndicatorDetails();
  }, [id, baseUrl, fetchIndicatorWithUser]);

  const {
    indicator_id,
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
    user_name,
  } = indicator;

  const isoString = created_at;
  const dateObj = new Date(isoString);
  const date = dateObj.toLocaleDateString("en-CA");

  const handleSelect = () => {
    if (toggleDescription) {
      setToggleDescription(false);
      setToggleCode(true);
    } else {
      setToggleDescription(true);
      setToggleCode(false);
    }
  };

  return (
    <main className="indicator-details-main">
      <aside className="indicator-details-aside">
        <h2 className="indicator-details-aside__headline">Indicator Details</h2>
        <ul className="indicator-details-aside__list">
          <a href="#description">
            <li
              className={`indicator-details-aside__list__item ${
                toggleDescription
                  ? "indicator-details-aside__list__item--selected"
                  : ""
              } `}
              onClick={handleSelect}
            >
              Description
            </li>
          </a>
          <a href="#code">
            <li
              className={`indicator-details-aside__list__item ${
                toggleCode
                  ? "indicator-details-aside__list__item--selected"
                  : ""
              } `}
              onClick={handleSelect}
            >
              Code
            </li>
          </a>
        </ul>
      </aside>
      <article className="indicator-details-content">
        <h1 className="indicator-details-content__headline">{name}</h1>
        <div className="indicator-details-content__user">
          <Link to={`/user/${user_id}`}>
            <p className="indicator-details-content__user-name">{user_name}</p>
          </Link>
          <p className="indicator-details-content__user-date">{date}</p>
        </div>
        <div className="indicator-details-content__info">
          <div className="indicator-details-content__info__left">
            <div className="indicator-details-content__info__left__license">
              <Tags tag={license} />
            </div>

            <div className="indicator-details-content__info__left__language">
              <Tags tag={language} />
            </div>
            <p className="indicator-details-content__info__left__type">
              {type}
            </p>
          </div>
          <div>
            <p className="indicator-details-content__info__right__rating">
              {`${rating} (${rating_count} ratings)`}
            </p>
          </div>
        </div>
        <section
          className="indicator-details-content__container"
          id="description"
        >
          <h2 className="indicator-details-content__container__title">
            Description
          </h2>
          <p className="indicator-details-content__container__description">
            {description}
          </p>
        </section>
        <section className="indicator-details-content__container" id="code">
          <h2 className="indicator-details-content__container__title">Code</h2>
          <code className="indicator-details-content__container__code">
            {code}
          </code>
        </section>
      </article>
    </main>
  );
}

export default IndicatorDetails;
