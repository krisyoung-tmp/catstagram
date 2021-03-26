import { gql } from '@apollo/client';

export const MarkFavourite = gql`
  mutation MarkFavourite($image_id: String!) {
    favourite(image_id: $image_id) {
      id
      image_id
    }
  }
`;
