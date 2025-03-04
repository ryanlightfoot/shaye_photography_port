import './App.css';
import FadeInSection from './components/fade_in_section/FadeInSection';
import ImageGrid from './components/image_grid/ImageGrid'; // Import ImageGrid
import backgroundImage from './assets/images/main_bg.jpeg';
import AboutMe from './components/about_me/AboutMe';

function App() {
  const imageNames = ['image1', 'image2', 'image3']; // Ensure these images exist in your assets
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
      <div align="center" style={{ paddingBottom: '5rem' }}>
          <h1 className="subtitle" style={{ marginBottom: '1rem'}}>CONTACT ME</h1>        
        <div style={{alignItems: 'center' }}>
          <p className="content" style={{ marginBottom: '0.2rem' }}>EMAIL: SHAYELRAM@ICLOUD.COM</p>
          <p className="content" style={{ marginBottom: '5rem' }}>PHONE: +27 735 549618</p>
          <ImageGrid imageNames={imageNames} />
        </div>
      </div>
    </div>
  );
}

export default App;
