import React from 'react';
import { render } from '@testing-library/react';

import { FavouriteButton } from './favourite-button';

describe('FavouriteButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FavouriteButton
        image={{ url: 'https://www.placecage.com/200/200' }}
        onFavourite={() => null}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
