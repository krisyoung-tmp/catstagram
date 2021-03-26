import { useQuery } from '@apollo/client';
import { GetCategories } from '../queries/categories';

export const useCategories = () => {
  const { data: { categories } = {}, loading, error, refetch } = useQuery(
    GetCategories
  );
  return { categories, loading, error, refetch };
};
