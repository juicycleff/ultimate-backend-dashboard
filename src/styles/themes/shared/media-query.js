// @flow

import {getMediaQuery} from '../../../helpers';
import breakpoints from './breakpoints.js';
import type {MediaQueryT} from '../types.js';

const mediaQuery: MediaQueryT = {
  small: getMediaQuery(breakpoints.small),
  medium: getMediaQuery(breakpoints.medium),
  large: getMediaQuery(breakpoints.large),
  xlarge: getMediaQuery(breakpoints.xlarge),
};

export default mediaQuery;
