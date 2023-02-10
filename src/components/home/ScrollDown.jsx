import React from "react";

const ScrollDown = () => {
  return (
    <div className="home-scroll">
      <a href="#about" className="home-scroll-button button--flex">
        <h5 className="scroll-icon">
          Scroll
          <span className="scroll-icon">
            {/* <i class="uil uil-mouse-alt-2 home-scroll-arrow"></i> */}
            <i class="uil uil-arrow-down home-scroll-arrow"></i>
          </span>
          Down
        </h5>
        {/* <i class="uil uil-mouse-alt-2 home-scroll-arrow"></i>
        <span className="home-scroll-name">Scroll Down</span>
        <i class="uil uil-arrow-down"></i> */}
      </a>
    </div>
  );
};

export default ScrollDown;
