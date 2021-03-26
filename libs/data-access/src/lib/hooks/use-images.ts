import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GetImages } from '../queries/images';

export const useImages = (filters) => {
  const {
    data: { images } = {},
    loading,
    error,
    fetchMore,
    refetch,
    networkStatus,
  } = useQuery(GetImages, {
    variables: {
      offset: 0,
      limit: 16,
      categories: []
        .concat(filters?.categories?.value)
        .filter((x) => x)
        .map(Number),
      breeds: [].concat(filters?.breeds?.value).filter((x) => x),
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    refetch();
  }, [refetch, filters]);

  const finalImages = images?.edges.map(({ node }) => node) ?? [];
  const pageInfo = images?.pageInfo ?? {
    totalCount: 0,
    hasPreviousPage: false,
    hasNextPage: false,
  };

  return {
    images: finalImages,
    pageInfo,
    loading: loading || networkStatus === 3,
    error,
    fetchMore,
    refetch,
  };
};
