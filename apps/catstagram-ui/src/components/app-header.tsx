import React from 'react';
import {
  Pane,
  majorScale,
  Button,
  Tooltip,
  Heading,
  UploadIcon,
} from 'evergreen-ui';
import styled from '@emotion/styled';
import { useHistory, Link } from 'react-router-dom';
import CategoriesFilter from './categories-filter';
import { Route } from 'react-router-dom';

const StyledLink = styled(Link)`
  flex: 1 0 auto;
  text-decoration: none;
`;

export const AppHeader = ({ isSmallScreen }) => {
  const history = useHistory();

  return (
    <Pane
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      display="flex"
      justifyContent="center"
      padding={majorScale(1)}
      elevation={2}
      height={majorScale(6)}
      background="tint2"
    >
      <Pane
        display="flex"
        width="100%"
        maxWidth="86rem"
        alignItems="center"
        paddingLeft={majorScale(2)}
        paddingRight={majorScale(2)}
      >
        <StyledLink to="/">
          <Heading is="h1" size={700} fontFamily="cursive">
            <span aria-label="Cat" role="img">
              🐈
            </span>
            &nbsp;Catstagram
          </Heading>
        </StyledLink>
        <Pane display="flex">
          {isSmallScreen && (
            <Route exact path="/">
              <CategoriesFilter isSmallScreen />
            </Route>
          )}
          <Tooltip content="Upload">
            <Button
              marginLeft={majorScale(1)}
              iconBefore={UploadIcon}
              onClick={() => history.push('/upload')}
            >
              Upload
            </Button>
          </Tooltip>
        </Pane>
      </Pane>
    </Pane>
  );
};
