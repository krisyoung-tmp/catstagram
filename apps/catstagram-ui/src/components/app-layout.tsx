import React, { useMemo } from 'react';
import { useTheme, Pane, majorScale } from 'evergreen-ui';
import { Global, css } from '@emotion/react';
import { AppHeader } from './app-header';

const getGlobalStyles = (theme) => css`
  body {
    margin: 0;
    background: ${theme.colors.background.tint1};
  }
`;

export const AppLayout = ({ isSmallScreen, children }) => {
  const theme = useTheme();

  const globalStyles = useMemo(() => getGlobalStyles(theme), [theme]);

  return (
    <Pane display="flex" flexDirection="column" alignItems="center">
      <Global styles={globalStyles} />
      <AppHeader isSmallScreen={isSmallScreen} />
      <Pane
        width="100%"
        maxWidth="86rem"
        paddingLeft={majorScale(2)}
        paddingRight={majorScale(2)}
        paddingBottom={majorScale(2)}
        paddingTop={majorScale(8)}
      >
        {children}
      </Pane>
    </Pane>
  );
};
