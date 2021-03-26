import React from 'react';
import { useFilters } from '../hooks/use-filters';

export const withFilters = (Component) => (props) => {
  const { filters, setFilters } = useFilters();
  return (
    <Component {...props} filters={filters} onChangeFilters={setFilters} />
  );
};
