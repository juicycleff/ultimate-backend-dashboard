// @flow
import {assetUrl} from 'fusion-core';

export const fontConfig = {
  withStyleOverloads: true,
  Lato: [
    {
      urls: {
        woff2: assetUrl('ca614426b50ca7d007056aa00954764b.woff2'),
        woff: assetUrl('ca614426b50ca7d007056aa00954764b.woff2'),
      },
      styles: {
        fontWeight: 400,
      },
    },
    {
      urls: {
        woff2: assetUrl('ca104da8af9a2e0771e8fe2b31f8ec1e.woff2'),
        woff: assetUrl('ca104da8af9a2e0771e8fe2b31f8ec1e.woff2'),
      },
      styles: {
        fontWeight: 700,
      },
    },
    {
      urls: {
        woff2: assetUrl('03b64805a8cd2d53fadc5814445c2fb5.woff2'),
        woff: assetUrl('03b64805a8cd2d53fadc5814445c2fb5.woff2'),
      },
      styles: {
        fontWeight: 200,
      },
    },
  ],
};
