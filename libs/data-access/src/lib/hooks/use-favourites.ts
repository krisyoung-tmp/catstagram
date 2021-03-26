import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { MarkFavourite } from '../mutations/mark-favourite';
import { UnmarkFavourite } from '../mutations/unmark-favourite';

const markAsFavouriteUpdateStrategy = (image) => (
  proxy,
  { data: { favourite } }
) => {
  proxy.modify({
    id: proxy.identify(image),
    fields: {
      favourite: () => favourite,
    },
  });
};

const unmarkAsFavouriteUpdateStrategy = (image) => (proxy) => {
  proxy.modify({
    id: proxy.identify(image),
    fields: {
      favourite() {
        return null;
      },
    },
  });
};

export const useFavourites = () => {
  const [_markFavourite, { data: markData, error: markError }] = useMutation(
    MarkFavourite
  );
  const [
    _unmarkFavourite,
    { data: unmarkData, error: unmarkError },
  ] = useMutation(UnmarkFavourite);

  const markFavourite = useCallback(
    (image) =>
      _markFavourite({
        variables: { image_id: image?.id },
        optimisticResponse: {
          __typename: 'Mutation',
          favourite: {
            __typename: 'Favourite',
            id: '__PENDING__',
            image_id: image?.id,
          },
        },
        update: markAsFavouriteUpdateStrategy(image),
      }),
    [_markFavourite]
  );

  const unmarkFavourite = useCallback(
    (image) =>
      _unmarkFavourite({
        variables: { id: image?.favourite?.id },
        optimisticResponse: {
          __typename: 'Mutation',
          unfavourite: { id: image?.favourite?.id },
        },
        update: unmarkAsFavouriteUpdateStrategy(image),
      }),

    [_unmarkFavourite]
  );
  return {
    markFavourite,
    unmarkFavourite,
    error: markError || unmarkError || null,
  };
};
