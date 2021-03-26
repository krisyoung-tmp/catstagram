import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, defaultTheme } from 'evergreen-ui';
import { Global, css } from '@emotion/react';
import { createApolloClient } from '@catstagram/data-access';
import App from './app/app';

const client = createApolloClient();

const globalStyles = css`
  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider value={defaultTheme}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
