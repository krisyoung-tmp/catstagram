import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { useCategories } from '@catstagram/data-access';
import { FiltersContext } from '../contexts/filters-context';

const mapCategoriesToFilterSet = (categories = []) => ({
  value: '',
  options: [{ value: '', label: 'all' }].concat(
    categories.map(({ id, name }) => ({
      value: id,
      label: name,
    }))
  ),
});

export const FiltersProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { categories } = useCategories();
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      categories: mapCategoriesToFilterSet(categories),
    }));
  }, [categories]);

  const handleSetFilters = useCallback(
    (keyValPairs) =>
      setFilters((prevState) =>
        Object.entries(keyValPairs).reduce((acc, [key, value]) => {
          return Object.assign({}, acc, { [key]: { ...acc[key], value } });
        }, prevState)
      ),
    [setFilters]
  );

  const value = useMemo(
    () => ({
      showFilters,
      filters,
      setFilters: handleSetFilters,
      setShowFilters,
    }),
    [filters, handleSetFilters, showFilters, setShowFilters]
  );

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};
