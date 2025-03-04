import React from 'react';
import ImageGrid from './ImageGrid';

const ImageGridTest = () => {
  const testImageNames = ['image1', 'image2', 'image3']; // Replace with actual image names

  return (
    <div>
      <h1>Image Grid Test</h1>
      <ImageGrid imageNames={testImageNames} />
    </div>
  );
};

export default ImageGridTest; 