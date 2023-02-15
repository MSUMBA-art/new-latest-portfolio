import React from "react";
import "./about.css";
import AboutImage from "../../assets/suit.jpg";
import CV from "../../assets/CV_D5.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">Introduction</span>

      <div className="about-container container grid">
        <img src={AboutImage} alt="About" className="about-image" />

        <div className="about-data">
          <Info />

          <p className="about-description">
            An enthusiastic Fullstack Web Developer, adept in most stages of
            advanced web development. Basic knowledge in User Interface
            development, Backend, Database, testing, and debugging processes
          </p>

          <a download="" href={CV} className="button button-flex">
            Download CV <i class="uil uil-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
