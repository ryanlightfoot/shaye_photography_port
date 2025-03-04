import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageGrid from './ImageGrid';

test('renders ImageGrid with images', () => {
  const testImageNames = ['image_1', 'image_2', 'image_3'];
  render(<ImageGrid imageNames={testImageNames} />);

  testImageNames.forEach(name => {
    const imgElement = screen.getByAltText(name);
    expect(imgElement).toBeInTheDocument();
  });
}); 