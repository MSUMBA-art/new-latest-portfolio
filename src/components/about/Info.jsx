import React from 'react'

const Info = () => {
  return (
    <div className="about-info grid">
      
      <div className="about-box">
        <i class="bx bx-code-block about-icon"></i>
        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">2 Years</span>
      </div>

      <div className="about-box">
        <i class="bx bxl-nodejs about-icon"></i>
        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">10 Projects</span>
      </div>

      <div className="about-box">
        <i class="bx bx-code-alt about-icon"></i>
        <h3 className="about-title">Availability</h3>
        <span className="about-subtitle">Immediately</span>
      </div>
    </div>
  );
}

export default Info