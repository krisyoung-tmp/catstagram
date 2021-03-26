import React from 'react';
import { useImages } from '../hooks/use-images';

export const withImages = (Component) => (props) => {
  const { images, pageInfo, loading, error, fetchMore } = useImages(
    props.filters
  );
  return (
    <Component
      {...props}
      images={images}
      loading={loading}
      error={error}
      hasMore={pageInfo.hasNextPage}
      onFetchMore={() => fetchMore({ variables: { offset: images.length } })}
    />
  );
};
