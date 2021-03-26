import React from 'react';
import { useTheme, HeartIcon, IconButton, Tooltip, Theme } from 'evergreen-ui';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

const StyledHeartIcon = styled(HeartIcon, {
  shouldForwardProp: isPropValid,
})<{ theme: Theme; isActive: boolean }>`
  transform: scale(${(props) => (props.isActive ? 1.5 : 1)});
  color: ${(props) =>
    props.isActive
      ? props.theme.palette.red.base
      : props.theme.colors.icon.default};
  :hover {
    color: ${(props) => props.theme.palette.red.dark};
  }
`;

export const FavouriteButton = ({ image, onFavourite }) => {
  const theme = useTheme();

  return (
    <Tooltip
      content={image.favourite ? 'Unmark as favourite' : 'Mark as favourite'}
    >
      <IconButton
        onClick={onFavourite}
        appearance="minimal"
        icon={() => (
          <StyledHeartIcon theme={theme} isActive={Boolean(image.favourite)} />
        )}
      />
    </Tooltip>
  );
};
