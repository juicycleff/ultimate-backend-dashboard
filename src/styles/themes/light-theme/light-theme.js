// @flow
import colors from './color-tokens';

import getSemanticColors from './color-semantic-tokens';
import getColorComponentTokens from './color-component-tokens';
import borders from '../shared/borders';
import lighting from './lighting';
import getTypography from '../shared/typography';
import animation from '../shared/animation';
import breakpoints from '../shared/breakpoints';
import grid from '../shared/grid';
import mediaQuery from '../shared/media-query';
import sizing from '../shared/sizing';

import type {ThemeT} from '../../types';

export const LightTheme: ThemeT = {
  name: 'light-theme',
  colors: {
    ...colors,
    ...getColorComponentTokens(),
    ...getSemanticColors(),
  },
  animation,
  breakpoints,
  borders,
  direction: 'auto',
  grid,
  lighting,
  mediaQuery,
  sizing,
  typography: getTypography(),
  // TODO(#2318) Remove it in the next v10 major version.
  // Do not use.
  zIndex: {
    modal: 2000,
  },
};
