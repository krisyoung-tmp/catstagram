import React, { useEffect } from 'react';
import { toaster } from 'evergreen-ui';
import { useVoting } from '../hooks/use-voting';

export const withVoting = (Component) => (props) => {
  const { castUpVote, castDownVote, getVoteCount, error } = useVoting();

  useEffect(() => {
    error && toaster.danger(error[0]?.message);
  }, [error]);

  return (
    <Component
      {...props}
      onUpVote={() => castUpVote(props.image)}
      onDownVote={() => castDownVote(props.image)}
      voteCount={getVoteCount(props.image)}
    />
  );
};
