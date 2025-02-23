import "./Docs.scss";
import { useState } from "react";

function Docs() {
  const [toggleIntro, setToggleIntro] = useState(false);
  const [toggleInstallation, setToggleInstallation] = useState(false);
  const [toggleUsage, setToggleUsage] = useState(false);
  const [toggleExamples, setToggleExamples] = useState(false);
  const [toggleContributing, setToggleContributing] = useState(false);
  const [toggleLicense, setToggleLicense] = useState(false);

  const handleSelect = (e) => {
    const name = e.target.getAttribute("name");
    switch (name) {
      case "introduction":
        setToggleIntro(true);
        setToggleInstallation(false);
        setToggleUsage(false);
        setToggleExamples(false);
        setToggleContributing(false);
        setToggleLicense(false);
        break;
      case "installation":
        setToggleIntro(false);
        setToggleInstallation(true);
        setToggleUsage(false);
        setToggleExamples(false);
        setToggleContributing(false);
        setToggleLicense(false);
        break;
      case "usage":
        setToggleIntro(false);
        setToggleInstallation(false);
        setToggleUsage(true);
        setToggleExamples(false);
        setToggleContributing(false);
        setToggleLicense(false);
        break;
      case "examples":
        setToggleIntro(false);
        setToggleInstallation(false);
        setToggleUsage(false);
        setToggleExamples(true);
        setToggleContributing(false);
        setToggleLicense(false);
        break;
      case "contributing":
        setToggleIntro(false);
        setToggleInstallation(false);
        setToggleUsage(false);
        setToggleExamples(false);
        setToggleContributing(true);
        setToggleLicense(false);
        break;
      case "license":
        setToggleIntro(false);
        setToggleInstallation(false);
        setToggleUsage(false);
        setToggleExamples(false);
        setToggleContributing(false);
        setToggleLicense(true);
        break;
      default:
        break;
    }
  };

  return (
    <main className="docs-main">
      <aside className="docs-aside">
        <h2 className="docs-aside__headline">Table of Contents</h2>
        <ul className="docs-aside__list">
          <a href="#introduction">
            <li
              name="introduction"
              className={`docs-aside__list__item ${
                toggleIntro ? "docs-aside__list__item--selected" : ""
              } `}
              onClick={handleSelect}
            >
              Introduction
            </li>
          </a>
          <a href="#installation">
            <li
              name="installation"
              className={`docs-aside__list__item ${
                toggleInstallation ? "docs-aside__list__item--selected" : ""
              } `}
              onClick={handleSelect}
            >
              Installation
            </li>
          </a>
          <a href="#usage">
            <li
              name="usage"
              className={`docs-aside__list__item ${
                toggleUsage ? "docs-aside__list__item--selected" : ""
              } `}
              onClick={handleSelect}
            >
              Usage
            </li>
          </a>
          <a href="#examples">
            <li
              name="examples"
              className={`docs-aside__list__item ${
                toggleExamples ? "docs-aside__list__item--selected" : ""
              } `}
              onClick={handleSelect}
            >
              Examples
            </li>
          </a>
          <a href="#contributing">
            <li
              name="contributing"
              className={`docs-aside__list__item ${
                toggleContributing ? "docs-aside__item--selected" : ""
              } `}
              onClick={handleSelect}
            >
              Contributing
            </li>
          </a>
          <a href="#license">
            <li
              name="license"
              className={`docs-aside__list__item ${
                toggleLicense ? "docs-aside__list__item--selected" : ""
              } `}
              onClick={handleSelect}
            >
              License
            </li>
          </a>
        </ul>
      </aside>
      <article className="docs-content">
        <h1 className="docs-content__headline">Documentation</h1>
        <section className="docs-content__item" id="introduction">
          <h2 className="docs-content__item__headline">Introduction</h2>
          <p className="docs-content__item__text">
            Welcome to the BEAT documentation. Here you will find everything you
            need to know about BEAT.
          </p>
        </section>
      </article>
    </main>
  );
}

export default Docs;
