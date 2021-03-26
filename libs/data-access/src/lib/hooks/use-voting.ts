import { useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { CastVote } from '../mutations/cast-vote';
import { GetVotes } from '../queries/votes';

const castVoteUpdateStrategy = (image) => (proxy, { data: { vote } }) => {
  const { votes } = proxy.readQuery({ query: GetVotes });
  proxy.writeQuery({
    query: GetVotes,
    data: { votes: votes.concat(vote) },
  });
  proxy.modify({
    id: proxy.identify(image),
    fields: {
      vote() {
        return { id: vote.id, value: vote.value };
      },
    },
  });
};

export const useVoting = () => {
  const { data: { votes = [] } = {} } = useQuery(GetVotes);
  const [_castVote, { error }] = useMutation(CastVote);

  const getVoteCount = useCallback(
    (image) => {
      const upvotes = votes.filter(
        (x) => x.value === 1 && x.image_id === image.id
      ).length;
      const downvotes = votes.filter(
        (x) => x.value === 0 && x.image_id === image.id
      ).length;
      const total = upvotes - downvotes;
      return total;
    },
    [votes]
  );

  const castUpVote = useCallback(
    (image) => {
      _castVote({
        variables: { image_id: image.id, value: 1 },
        optimisticResponse: {
          __typename: 'Mutation',
          vote: {
            __typename: 'Vote',
            id: '__PENDING__',
            image_id: image.id,
            value: 1,
          },
        },
        update: castVoteUpdateStrategy(image),
      });
    },
    [_castVote]
  );

  const castDownVote = useCallback(
    (image) => {
      _castVote({
        variables: { image_id: image.id, value: 0 },
        optimisticResponse: {
          __typename: 'Mutation',
          vote: {
            __typename: 'Vote',
            id: '__PENDING__',
            image_id: image.id,
            value: 0,
          },
        },
        update: castVoteUpdateStrategy(image),
      });
    },
    [_castVote]
  );
  return { getVoteCount, castUpVote, castDownVote, error };
};
