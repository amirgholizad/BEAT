import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchIndicatorWithUser } from "../../functions/Functions";
import Tags from "../../components/Tags/Tags";
import Highlighter from "../../components/Highlighter/Highlighter";
import "./IndicatorDetails.scss";
import { use } from "react";
function IndicatorDetails() {
  const baseUrl = import.meta.env.VITE_APP_URL;
  const id = useParams().id;
  const [user, setUser] = useState({});
  const [toggleCode, setToggleCode] = useState(false);
  const [toggleDescription, setToggleDescription] = useState(false);

  const [indicator_id, setIndicator_id] = useState("");
  const [user_id, setUser_id] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [language, setLanguage] = useState("");
  const [license, setLicense] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [rating, setRating] = useState("");
  const [rating_count, setRating_count] = useState("");
  const [created_at, setCreated_at] = useState("");
  const [user_name, setUser_name] = useState("");

  useEffect(() => {
    const getIndicatorDetails = async () => {
      const data = await fetchIndicatorWithUser(id, baseUrl);
      if (data) {
        setIndicator_id(data.id);
        setUser_id(data.user_id);
        setName(data.name);
        setType(data.type);
        setLanguage(data.language);
        setLicense(data.license);
        setDescription(data.description);
        setCode(data.code);
        setRating(data.rating);
        setRating_count(data.rating_count);
        setCreated_at(data.created_at);
        setUser_name(data.user_name);
      }
    };
    getIndicatorDetails();
  }, [id, baseUrl, fetchIndicatorWithUser]);

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
          <div className="indicator-details-content__container__code-container">
            {" "}
            <code className="indicator-details-content__container__code-container__code">
              {code}
            </code>
          </div>
        </section>
      </article>
    </main>
  );
}

export default IndicatorDetails;
``;
