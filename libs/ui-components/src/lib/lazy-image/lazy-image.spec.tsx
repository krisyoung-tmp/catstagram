import React from 'react';
import { render } from '@testing-library/react';

import LazyImage from './lazy-image';

describe('LazyImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LazyImage />);
    expect(baseElement).toBeTruthy();
  });
});
