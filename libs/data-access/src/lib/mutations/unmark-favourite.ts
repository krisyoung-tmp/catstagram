import { gql } from '@apollo/client';

export const UnmarkFavourite = gql`
  mutation UnmarkFavourite($id: String!) {
    unfavourite(id: $id) {
      id
      message
    }
  }
`;
