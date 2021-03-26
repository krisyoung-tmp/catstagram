import { gql } from '@apollo/client';

export const GetBreeds = gql`
  query GetBreeds {
    breeds {
      id
      name
    }
  }
`;
