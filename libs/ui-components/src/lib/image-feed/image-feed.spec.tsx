import React from 'react';
import { render } from '@testing-library/react';

import ImageFeed from './image-feed';

describe('ImageFeed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageFeed />);
    expect(baseElement).toBeTruthy();
  });
});
