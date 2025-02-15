import { useNavigate } from "react-router";
import { useEffect } from "react";
import "./Home.scss";

function Home() {
  return (
    <section className="home-banner">
      <h1 className="home-banner__title">
        Welcome to <span className="logo">BEAT!</span>
      </h1>
      <h2 className="home-banner__intro">
        Where science and markets come together!
      </h2>
    </section>
  );
}

export default Home;
