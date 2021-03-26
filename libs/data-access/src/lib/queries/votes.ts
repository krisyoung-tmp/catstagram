import { gql } from '@apollo/client';

export const GetVotes = gql`
  query GetVotes {
    votes {
      id
      image_id
      value
    }
  }
`;
