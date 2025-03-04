import './App.css';
import FadeInSection from './components/fade_in_section/FadeInSection';
import backgroundImage from './assets/images/main_bg.jpeg';

function App() {
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
          <h1 className="title">
            SHAYE RAMSAY
          </h1>
          <h2 className="subtitle" style={{ marginBottom: '1rem' }}>
            PHOTOGRAPHER AND VIDEOGRAPHER
          </h2>      
          <h2 className="content" style={{margin: '0 auto' }}>CAPE TOWN, SOUTH AFRICA | 20 - 03 - 2003</h2>
        </header>
      </FadeInSection>
      
      <div align="center">
        {/* <FadeInSection delay={200}>
        </FadeInSection> */}
        
        <FadeInSection delay={300}>
          <h2 className="subtitle" style={{ marginBottom: '1rem', marginTop: '25rem' }}>
            ABOUT ME
          </h2>
        </FadeInSection>
        
        <FadeInSection delay={400}>
          <p className="content" style={{ marginBottom: '25rem' }}>
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
      
      <div align="center" style={{ paddingBottom: '5rem' }}>
        <FadeInSection delay={500}>
          <h1 className="subtitle" style={{ marginBottom: '3rem'}}>CONTACT ME</h1>
        </FadeInSection>
        
        <div style={{alignItems: 'center' }}>
          <FadeInSection delay={600}>
            <p className="content" style={{ marginBottom: '2rem' }}>EMAIL: SHAYELRAM@ICLOUD.COM</p>
          </FadeInSection>
          
          <FadeInSection delay={700}>
            <p className="content" style={{ marginBottom: '5rem' }}>PHONE: +27 735 549618</p>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}

export default App;
