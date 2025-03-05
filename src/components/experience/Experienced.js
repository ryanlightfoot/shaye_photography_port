import React from 'react';
import './Experience.css';
import FadeInSection from '../fade_in_section/FadeInSection';

const Experience = ({ imageNames }) => {
  return (
    <div className="experience-container">
      <FadeInSection delay={50}>
        <h2 className="experience-title">EXPERIENCE</h2>
        <p className="experience-content">
          product shoots, video advertising, water photography, directing and coordination, professional editing, sound production.
        </p>
      </FadeInSection>

      <FadeInSection delay={50}>
      <div className="image-gallery">
        {imageNames.map((name, index) => (
          <img
            key={index}
            src={require(`../../assets/images/${name}.webp`)}
            alt={`Experience ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
      </FadeInSection>
    </div>
  );
};

export default Experience;

document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.image-gallery');
  const images = gallery.querySelectorAll('.gallery-image');
  const numberOfImages = images.length;

  // Calculate gap based on the number of images
  const gap = 100 / numberOfImages + 'px'; // Example calculation

  // Set the CSS variable
  gallery.style.setProperty('--image-gap', gap);
});
