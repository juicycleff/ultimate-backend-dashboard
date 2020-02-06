// @flow

export const camelToKebab = (s: string) =>
  s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
