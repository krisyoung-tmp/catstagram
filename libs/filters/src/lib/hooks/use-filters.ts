import { useContext } from 'react';
import { FiltersContext } from '../contexts/filters-context';

export const useFilters = () => {
  return useContext(FiltersContext);
};
