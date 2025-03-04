import React, { useState } from 'react';
import './image_grid.css';

const ImageGrid = ({ imageNames }) => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (name) => {
    setLoadedImages((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className="image-grid">
      {imageNames.map((name, index) => (
        <div key={index} className="grid-image-container">
          <img
            src={require(`../../assets/images/${name}.webp`)}
            alt={name}
            className={`grid-image ${loadedImages[name] ? 'loaded' : ''}`}
            loading="lazy"
            onLoad={() => handleImageLoad(name)}
          />
          <div className="image-name">{name}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid; 