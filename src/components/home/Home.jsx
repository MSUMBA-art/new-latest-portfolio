import React from "react";
import Socials from "./Socials";
import "./home.css";
import Data from "./Data";
import ScrollDown from "./ScrollDown";


const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Socials />

          <div className="home-image"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
