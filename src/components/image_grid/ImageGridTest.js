import React from 'react';
import ImageGrid from './ImageGrid';

const ImageGridTest = () => {
  const testImageNames = ['image_1', 'image_2', 'image_3']; // Replace with actual image names

  return (
    <div>
      <h1>Image Grid Test</h1>
      <ImageGrid imageNames={testImageNames} />
    </div>
  );
};

export default ImageGridTest; 