import { RenderFunction } from '@storybook/react';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import {Normalize} from 'styled-normalize';
import theme from '../src/theme';

export default (storyFn: RenderFunction) => (
  <ThemeProvider theme={theme}>
    <div style={{ paddingLeft: 30, paddingRight: 30 }}>
      <Normalize />
      {storyFn()}
    </div>
  </ThemeProvider>
);
