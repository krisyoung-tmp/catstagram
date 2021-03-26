import React from 'react';
import {
  IconButton,
  ArrowUpIcon,
  ArrowDownIcon,
  Pill,
  Pane,
  majorScale,
  minorScale,
  Tooltip,
} from 'evergreen-ui';

export const VotingControl = ({ image, onUpVote, onDownVote, voteCount }) => {
  return (
    <Pane display="flex" alignItems="center" marginRight={majorScale(1)}>
      <Tooltip content="Upvote">
        <IconButton
          height={majorScale(3)}
          onClick={onUpVote}
          icon={ArrowUpIcon}
          disabled={image.vote?.value === 1}
        />
      </Tooltip>
      <Tooltip content="Downvote">
        <IconButton
          height={majorScale(3)}
          onClick={onDownVote}
          icon={ArrowDownIcon}
          marginLeft={minorScale(1)}
          disabled={image.vote?.value === 0}
        />
      </Tooltip>
      <Pill marginLeft={majorScale(1)}>{voteCount}</Pill>
    </Pane>
  );
};
