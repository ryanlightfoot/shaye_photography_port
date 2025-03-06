import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipOpacity, setTooltipOpacity] = useState(0);

  const copyTextToClipboard = (event) => {
    const textToCopy = event.target.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setTooltipVisible(true);
      setTooltipOpacity(0); // Ensure opacity starts at 0
      setTimeout(() => {
        setTooltipOpacity(1); // Transition to full opacity
        setTimeout(() => {
          setTooltipOpacity(0); // Fade out
          setTimeout(() => setTooltipVisible(false), 500); // Hide after fade out
        }, 2000); // Keep visible for 2 seconds
      }, 0); // Start transition immediately
    });
  };

  return (
    <div className="contact-container">
      <div className="columns">
        <div className="column-left">
          <h1 className="titleleft">GET IN</h1>
          <h1 className="titleright">TOUCH</h1>
        </div>
        <div className="column-right">
          <h1 className="contact-title">Socials</h1>
          <h2 className="contact-content"><a href="https://www.instagram.com/shayeramsay/">instagram</a></h2>
          <h2 className="contact-content"><a href="https://www.linkedin.com/in/shaye-ramsay-ba8988352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin</a></h2>
          <h2 className="contact-content">
            <span onClick={copyTextToClipboard} className="email-link">
              shayelram@icloud.com
            </span>
            {tooltipVisible && (
              <span
                className="tooltip-contact"
                style={{
                  opacity: tooltipOpacity,
                  transition: tooltipOpacity === 1 ? 'opacity 1s ease-in' : 'opacity 0.5s ease-out'
                }}
              >
                Copied!
              </span>
            )}
          </h2>
          <h2 className="contact-content">
            <span onClick={copyTextToClipboard} className="email-link">
              +27 735549618
            </span>
            {tooltipVisible && (
              <span
                className="tooltip-contact"
                style={{
                  opacity: tooltipOpacity,
                  transition: tooltipOpacity === 1 ? 'opacity 1s ease-in' : 'opacity 0.5s ease-out'
                }}
              >
                Copied!
              </span>
            )}
          </h2>
        </div>
      </div>
      <p style={{ padding: '1rem', opacity: '0.8' }}>Developed by Lightdevelopments</p>
    </div>
  );
}

export default Contact;
