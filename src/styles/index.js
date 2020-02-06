// @flow
import {ThemeContext} from './theme-provider.js';

export {
  createTheme,
  lightThemePrimitives,
  LightTheme,
  LightThemeMove,
} from './themes';

export {
  createThemedStyled,
  createThemedWithStyle,
  createThemedUseStyletron,
  styled,
  withStyle,
  useStyletron,
} from './styled.js';

// export {LocaleProvider} from './other-types/locale';

export {hexToRgb} from './util.js';
export {default as ThemeProvider} from './theme-provider.js';
export const ThemeConsumer = ThemeContext.Consumer;
export type {ThemeT} from './types';
export type {PrimitivesT} from './themes/types';
