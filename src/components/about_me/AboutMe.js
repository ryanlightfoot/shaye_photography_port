import React from 'react';
import FadeInSection from '../fade_in_section/FadeInSection';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <FadeInSection delay={50}>
        <h2 className="subtitleAbout">
          ABOUT ME
        </h2>
      </FadeInSection>
      
      <FadeInSection delay={100}>
        <p className="contentAbout">
          All photographs in this
          portfolio are shot with 35mm
          film. I am an aspiring
          photographer and filmmaker
          living in Cape Town. I have
          completed my undergraduate in
          Architecture at the University
          of Cape Town where my studies
          have been guided by learning the
          importance of simplicity while
          paying close attention to
          detail of composition. This is
          evident in my photographs. I
          draw my inspiration for my
          photos from my most natural
          surroundings and landscapes
          while surfing and spending time
          in the Karoo. Approaching my
          subjects with curiosity, I aim
          to carefully consider context
          and translate my visions into
          intricate stills, using contrast
          and texture as a tool for
          performance.
        </p>
      </FadeInSection>
    </div>
  );
};

export default AboutMe; 