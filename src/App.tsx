import { Grommet } from 'grommet';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import Router from './router';
import { themeGrommet } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
  a {
    text-decoration: none;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

`;

const App = () => (
  <Grommet full={true} plain={true} theme={themeGrommet}>
    <>
      <GlobalStyle />
      <Router />
    </>
  </Grommet>
);

export default App;
