// @flow
import type {
  ColorTokensT,
  ComponentColorTokensT,
  SemanticColorTokensT,
  DeprecatedSemanticColorTokensT,
  AnimationT,
  BreakpointsT,
  BorderT,
  BordersT,
  FontT,
  GridT,
  LightingT,
  MediaQueryT,
  SizingT,
  TypographyT,
  ZIndexT,
} from './themes/types';

export type {
  AnimationT,
  BreakpointsT,
  BorderT,
  BordersT,
  FontT as Font,
  GridT,
  LightingT,
  MediaQueryT,
  SizingT,
  TypographyT,
  ZIndexT,
};

export type ColorsT = ColorTokensT &
  ComponentColorTokensT &
  SemanticColorTokensT &
  DeprecatedSemanticColorTokensT;

export type ThemeT = {|
  name: string,
  animation: AnimationT,
  borders: BordersT,
  breakpoints: BreakpointsT,
  colors: ColorsT,
  direction: 'auto' | 'rtl' | 'ltr',
  grid: GridT,
  // icons?: IconT,
  lighting: LightingT,
  mediaQuery: MediaQueryT,
  sizing: SizingT,
  typography: TypographyT,
  zIndex: ZIndexT,
  tooltip?: {
    backgroundColor: string,
  },
  // ^^^^^^^
|};
