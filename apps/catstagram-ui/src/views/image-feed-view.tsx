import React from 'react';
import { Pane, majorScale } from 'evergreen-ui';
import { ImageFeed, CatCard } from '@catstagram/ui-components';
import { CategoriesFilter } from '../components';
import {
  withFavourites,
  withVoting,
  withImages,
} from '@catstagram/data-access';
import { useFilters } from '@catstagram/filters';

const CatCardWithActions = withFavourites(withVoting(CatCard));
const ImageFeedWithData = withImages(ImageFeed);

export const ImageFeedView = ({ isSmallScreen }) => {
  const { filters } = useFilters();
  return (
    <Pane>
      {!isSmallScreen && (
        <Pane
          marginTop={majorScale(2)}
          position="sticky"
          top={majorScale(8)}
          background="tint1"
          elevation={2}
          zIndex={1}
        >
          <CategoriesFilter />
        </Pane>
      )}
      <Pane marginTop={majorScale(2)}>
        <ImageFeedWithData
          filters={filters}
          renderer={(image) => (
            <CatCardWithActions image={image} key={image.id} />
          )}
        />
      </Pane>
    </Pane>
  );
};
