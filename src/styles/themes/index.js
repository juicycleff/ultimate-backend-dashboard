// @flow
import createTheme from './creator';
import {LightTheme} from './light-theme/light-theme';
import {LightThemeMove} from './move-theme/light-theme-with-move';
import lightColorTokens from './light-theme/color-tokens';
import {fontTokens} from './shared/typography';

const lightThemePrimitives = {
  ...lightColorTokens,
  ...fontTokens,
};

export {createTheme, LightTheme, LightThemeMove, lightThemePrimitives};

export * from './types';
