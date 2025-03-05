import React, { useState, useEffect } from 'react';
import './App.css';
import FadeInSection from './components/fade_in_section/FadeInSection';
// import ImageGrid from './components/image_grid/ImageGrid'; // Import ImageGrid
import backgroundImage from './assets/images/main_bg.jpeg';
import AboutMe from './components/about_me/AboutMe';
import Experience from './components/experience/Experienced';
import Loading from './components/loading/Loading';
import TechnicalSkills from './components/technical_skills/technicalSkills';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const imageList = ['image1', 'image2', 'image3']; // Ensure these images exist in your assets
  const experienceList = ['IMG_0069', 'IMG_0563', 'IMG_8676']; // Ensure these images exist in your assets

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <FadeInSection>
        <header className="name-container"
                  style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
          <div className="overlay">
            <h1 className="title" >
              SHAYE RAMSAY
            </h1>
            <h2 className="subtitle" style={{ marginBottom: '1rem', color: 'white'}}>
              PHOTOGRAPHER AND VIDEOGRAPHER
            </h2>      
            <h2 className="content" style={{margin: '0 auto', color: 'white'}}>CAPE TOWN, SOUTH AFRICA | 20 - 03 - 2003</h2>
          </div>
        </header>
      </FadeInSection>
      <AboutMe />
      <Experience imageNames={experienceList} />
      <TechnicalSkills />
      <div align="center" style={{ paddingBottom: '5rem', marginTop: '15rem' }}>
          <h1 className="subtitle" style={{ marginBottom: '1rem'}}>CONTACT ME</h1>        
        <div style={{alignItems: 'center' }}>
          <p className="content" style={{ marginBottom: '0.2rem' }}>Email: shayeram@icloud.com</p>
          <p className="content" style={{ marginBottom: '1rem' }}>Phone: +27 735 549618</p>
          {/* <ImageGrid imageNames={imageList} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
