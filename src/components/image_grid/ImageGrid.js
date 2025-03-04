import React from 'react';
import './image_grid.css';

const ImageGrid = ({ imageNames }) => {
  return (
    <div className="image-grid">
      {imageNames.map((name, index) => (
        <img
          key={index}
          src={require(`../../assets/images/${name}.webp`)}
          alt={name}
          className="grid-image"
        />
      ))}
    </div>
  );
};

export default ImageGrid; 