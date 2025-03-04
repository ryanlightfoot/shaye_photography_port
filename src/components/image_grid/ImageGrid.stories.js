import React from 'react';
import ImageGrid from './ImageGrid';

export default {
  title: 'Components/ImageGrid',
  component: ImageGrid,
};

const Template = (args) => <ImageGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageNames: ['image1', 'image2', 'image3'], // Ensure these images exist
}; 