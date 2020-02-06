// @flow

import deepMerge from '../../utils/deep-merge';
import colorTokens from './light-theme/color-tokens';
import getSemanticColors from './light-theme/color-semantic-tokens';
import getColorComponentTokens from './light-theme/color-component-tokens';
import lighting from './light-theme/lighting';
import borders from './shared/borders';
import getTypography from './shared/typography';
import animation from './shared/animation';
import breakpoints from './shared/breakpoints';
import grid from './shared/grid';
import mediaQuery from './shared/media-query';
import sizing from './shared/sizing';

import type {ThemeT} from '../types';
import type {PrimitivesT} from './types';

export default function createTheme(
  // overrides for colorTokens + primatyFontFamily
  themeBuildingPrimitives: PrimitivesT,
  overrides?: {}
): ThemeT {
  // extract font-family from the themeBuildingPrimitives
  const {primaryFontFamily, ...colors} = themeBuildingPrimitives;
  // color keys in the themeBuildingPrimitives are the same as
  // the colorTokens so we just extend it with overrides
  // passed as an argument
  const colorTokensWithOverrides = {...colorTokens, ...colors};
  const theme = {
    colors: {
      ...colorTokensWithOverrides,
      // get component color tokens based on the colors with overrides
      ...getColorComponentTokens(colorTokensWithOverrides),
      ...getSemanticColors(colorTokensWithOverrides),
    },
    animation,
    breakpoints,
    borders,
    direction: 'auto',
    grid,
    lighting,
    mediaQuery,
    sizing,
    typography: primaryFontFamily
      ? // have to check if primaryFontFamily override is passed in
        // and use it to build the typography theme value
        // otherwise the default primaryFontFamily value is used
        getTypography({primaryFontFamily})
      : getTypography(),
    // TODO(#2318) Remove in v10, the next major version.
    // Do not use.
    zIndex: {
      modal: 2000,
    },
  };
  return deepMerge(theme, overrides);
}
