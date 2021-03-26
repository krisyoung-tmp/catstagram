import React, { useEffect } from 'react';
import { toaster } from 'evergreen-ui';
import { useFavourites } from '../hooks/use-favourites';

export const withFavourites = (Component) => (props) => {
  const { markFavourite, unmarkFavourite, error } = useFavourites();
  const handleFavourite = props.image.favourite
    ? unmarkFavourite
    : markFavourite;

  useEffect(() => {
    error && toaster.danger(error[0]?.message);
  }, [error]);

  return (
    <Component {...props} onFavourite={() => handleFavourite(props.image)} />
  );
};
