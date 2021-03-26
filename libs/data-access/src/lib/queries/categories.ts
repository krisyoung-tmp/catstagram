import { gql } from '@apollo/client';

export const GetCategories = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;
