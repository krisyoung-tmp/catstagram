import { gql } from '@apollo/client';

export const GetImages = gql`
  query GetImages(
    $offset: Int
    $limit: Int
    $categories: [Int!]
    $breeds: [String!]
  ) {
    images(
      offset: $offset
      limit: $limit
      categories: $categories
      breeds: $breeds
    ) {
      totalCount
      pageInfo {
        offset
        limit
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          url
          favourite {
            id
          }
          vote {
            id
            value
          }
        }
      }
    }
  }
`;

export const GetImage = gql`
  query GetImage($id: String) {
    image(id: $id) {
      id
      url
      favourite {
        id
      }
      vote {
        id
        value
      }
    }
  }
`;
