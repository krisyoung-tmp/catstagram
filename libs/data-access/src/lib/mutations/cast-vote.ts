import { gql } from '@apollo/client';

export const CastVote = gql`
  mutation CastVote($image_id: String!, $value: Int!) {
    vote(image_id: $image_id, value: $value) {
      id
      image_id
      value
    }
  }
`;
