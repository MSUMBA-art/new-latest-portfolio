import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section-title">What I Do</h2>
      <span className="section-subtitle">What I Do</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title"> Product Designer</h3>
              <p className="services-modal-description">
                A Junior Web Developer adept in most stages of advanced web
                development
                <ul className="services-modal-services grid">
                  <li className="services-modal-service">
                    <i className="uil uil-check-circle  services-modal-icon"></i>
                    <p className="services-modal-info">
                      develop the user interface
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i className="uil uil-check-circle  services-modal-icon"></i>
                    <p className="services-modal-info">web page development</p>
                  </li>

                  <li className="services-modal-service">
                    <i className="uil uil-check-circle  services-modal-icon"></i>
                    <p className="services-modal-info">
                      i create element interactions
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i className="uil uil-check-circle  services-modal-icon"></i>
                    <p className="services-modal-info">
                      i position your company brand
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i className="uil uil-check-circle  services-modal-icon"></i>
                    <p className="services-modal-info">design and mockups</p>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services-title">
              UI/UX <br /> Designer
            </h3>

            <span onClick={() => toggleTab(2)} className="services-button">
              Vie More
              <i className="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services-modal active-modal"
                  : "services-modal"
              }
            >
              <div className="services-modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services-modal-close"
                ></i>

                <h3 className="services-modal-title">UI/UX Designer</h3>
                <p className="services-modal-description">
                  A Junior Web Developer adept in most stages of advanced web
                  development
                  <ul className="services-modal-services grid">
                    <li className="services-modal-service">
                      <i className="uil uil-check-circle  services-modal-icon"></i>
                      <p className="services-modal-info">
                        develop the user interface
                      </p>
                    </li>

                    <li className="services-modal-service">
                      <i className="uil uil-check-circle  services-modal-icon"></i>
                      <p className="services-modal-info">
                        web page development
                      </p>
                    </li>

                    <li className="services-modal-service">
                      <i className="uil uil-check-circle  services-modal-icon"></i>
                      <p className="services-modal-info">
                        i create element interactions
                      </p>
                    </li>

                    <li className="services-modal-service">
                      <i className="uil uil-check-circle  services-modal-icon"></i>
                      <p className="services-modal-info">
                        i position your company brand
                      </p>
                    </li>

                    <li className="services-modal-service">
                      <i className="uil uil-check-circle  services-modal-icon"></i>
                      <p className="services-modal-info">design and mockups</p>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-edit services-icon"></i>
            <h3 className="services-title">
              Visual <br /> Design
            </h3>

            <span onClick={() => toggleTab(3)} className="services-button">
              Vie More
              <i className="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services-modal active-modal"
                  : "services-modal"
              }
            >
              <div className="services-modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services-modal-close"
                ></i>

                <h3 className="services-modal-title">Visual Designer</h3>
                <p className="services-modal-description">
                  A Junior Web Developer adept in most stages of advanced web
                  development
                  <ul className="services-modal-services grid">
                    <li className="services-modal-service">
                      <i className="uil uil-check-circle  services-modal-icon"></i>
                      <p className="services-modal-info">
                        develop the user interface
                      </p>
                    </li>

                    <li className="services-modal-service">
                      <i className="uil uil-check-circle  services-modal-icon"></i>
                      <p className="services-modal-info">
                        web page development
                      </p>
                    </li>

                    <li className="services-modal-service">
                      <i className="uil uil-check-circle  services-modal-icon"></i>
                      <p className="services-modal-info">
                        i create element interactions
                      </p>
                    </li>

                    <li className="services-modal-service">
                      <i className="uil uil-check-circle  services-modal-icon"></i>
                      <p className="services-modal-info">
                        i position your company brand
                      </p>
                    </li>

                    <li className="services-modal-service">
                      <i className="uil uil-check-circle  services-modal-icon"></i>
                      <p className="services-modal-info">design and mockups</p>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
