import React from 'react';
import styled from '@emotion/styled';
import { Pane } from 'evergreen-ui';
import { useMediaLayout } from 'use-media';

export interface ImageListProps {
  placeholder?: string;
  colCount?: number;
  colWidth?: string;
  colGap?: string;
  rowGap?: string;
}

const StyledImageList = styled.ul<Partial<ImageListProps>>`
  display: grid;
  list-style: none;
  padding: 0;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media (min-width: 30rem) and (max-width: 48rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 48rem) and (max-width: 84rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 84rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ImageList: React.FC<ImageListProps> = ({ children }) => {
  return <StyledImageList>{children}</StyledImageList>;
};

export { ImageList };
