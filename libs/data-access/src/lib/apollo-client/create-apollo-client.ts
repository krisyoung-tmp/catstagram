import { ApolloClient, InMemoryCache } from '@apollo/client';
import { relayStyleOffsetPagination } from './policies';

export const createApolloClient = () =>
  new ApolloClient({
    uri: `${process.env.NX_API_URL}/graphql`,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            images: relayStyleOffsetPagination(),
            favourites: { merge: false },
            votes: { merge: false },
          },
        },
      },
    }),
  });
