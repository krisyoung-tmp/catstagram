import React from 'react';
import { LazyImage } from '../lazy-image/lazy-image';
import { FavouriteButton } from '../favourite-button/favourite-button';
import { VotingControl } from '../voting-control/voting-control';
import { Pane, majorScale, Card } from 'evergreen-ui';

export const CatCard = ({
  image,
  onFavourite,
  onUpVote,
  onDownVote,
  voteCount,
}) => {
  return (
    <Card
      background="white"
      elevation={1}
      padding={majorScale(2)}
      data-testid="image"
    >
      <LazyImage url={image.url} />
      <Pane
        display="flex"
        justifyContent="space-between"
        marginTop={majorScale(2)}
      >
        <FavouriteButton image={image} onFavourite={onFavourite} />
        <VotingControl
          image={image}
          onUpVote={onUpVote}
          onDownVote={onDownVote}
          voteCount={voteCount}
        />
      </Pane>
    </Card>
  );
};
