// @flow
import {getHandlers} from 'fusion-plugin-service-worker';
import type {AssetInfo} from 'fusion-plugin-service-worker';

declare var self: any;

export default (assetInfo: AssetInfo) => {
  const {onFetch, onInstall, onActivate} = getHandlers(assetInfo);
  self.addEventListener('install', onInstall);
  self.addEventListener('activate', onActivate);
  self.addEventListener('fetch', onFetch);
};
