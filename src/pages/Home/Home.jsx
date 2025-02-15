import { useNavigate } from "react-router";
import { useEffect } from "react";
import aboutPic from "../../assets/images/about-image.png";
import amirg from "../../assets/images/Amir.png";
import "./Home.scss";

function Home() {
  return (
    <main className="home-main">
      <section className="home-banner">
        <h1 className="home-banner__title">
          Welcome to <span className="logo">BEAT!</span>
        </h1>
        <h2 className="home-banner__intro">
          Where science and markets come together!
        </h2>
      </section>
      <article className="home-about">
        <div className="home-about__content">
          <h2 className="home-about__content__title">About BEAT!</h2>
          <p className="home-about__content__description">
            BEAT is a platform that connects scientists, traders, and software
            ensigeers to develop deeper insight about fincnail markets. Our goal
            is to provide a platform where users can share their knowledge and
            expertise to discover the dynamics of financial markets and make
            more informed market decisions. The project was started by a group
            of <strong>enonophysicists</strong> who refused on giving up on the
            idea of using their knowledge to predict the stock market. We
            believe that the combination of science and technology can help us
            to understand the market better and make better decisions. We are a
            community of scientists, traders, and software engineers who are
            passionate about the market and want to make a difference. Join us
            and let's{" "}
            <span>
              <strong>BEAT THE MARKET</strong>
            </span>{" "}
            together!
          </p>
        </div>
        <img className="home-about__image" src={aboutPic} alt="about image" />
      </article>
      {/* <Features/> */}
      <section className="sub-footer">
        <div className="sub-footer__creators">
          <a href="https://github.com/amirgholizad/">
            <img
              className="sub-footer__creators__img"
              src={amirg}
              alt="amir photo"
            />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
