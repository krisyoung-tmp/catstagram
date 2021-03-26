import React from 'react';
import { render } from '@testing-library/react';

import VotingControl from './voting-control';

describe('VotingControl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VotingControl />);
    expect(baseElement).toBeTruthy();
  });
});
