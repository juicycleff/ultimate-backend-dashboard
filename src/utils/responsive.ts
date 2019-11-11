import { screen } from './screen';

// Ready made media queries
export const responsive = {
  lg: `@media (min-width: ${screen.lgMin}px)`,
  md: `@media (min-width: ${screen.mdMin}px) and (max-width: ${screen.mdMax}px)`,
  mdAndLess: `@media (max-width: ${screen.mdMax}px)`,
  sm: `@media (min-width: ${screen.smMin}px) and (max-width: ${screen.smMax}px)`,
  smAndLess: `@media (max-width: ${screen.smMax}px)`,
  xs: `@media (max-width: ${screen.xsMin}px)`,
  xsAndLess: `@media (max-width: ${screen.xsMax}px)`,
};
