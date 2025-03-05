import React from 'react';
import './technicalSkills.css';
import image from '../../assets/images/IMG_0079.webp'; // Import the image

const TechnicalSkills = () => {
  return (
    <div className="technical-skills-container">
      <div className="technical-skills-text">
        <h2 className="technical-skills-title">TECHNICAL SKILLS</h2>
        <p className="technical-skills-content">
          35mm film photography 7 years
        </p>
        <p className="technical-skills-content">
          underwater and in-water film and digital photography 2 years
        </p>
        <p className="technical-skills-content">
          digital videography and photography 3 years
        </p>
        <p className="technical-skills-content">
          proficiency in editing with adobe premiere pro 3 years, sound production.
        </p>
      </div>
      <div className="technical-skills-image">
        <img src={image} alt="Technical Skills" loading="lazy" />
      </div>
    </div>
  );
};

export default TechnicalSkills;
