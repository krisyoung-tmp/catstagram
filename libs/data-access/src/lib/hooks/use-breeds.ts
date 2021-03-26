import { useQuery } from '@apollo/client';
import { GetBreeds } from '../queries/breeds';

export const useBreeds = () => {
  const { data: { breeds } = {}, loading, error, refetch } = useQuery(
    GetBreeds
  );
  return { breeds, loading, error, refetch };
};
