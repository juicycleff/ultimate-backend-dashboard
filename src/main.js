// @flow
import 'isomorphic-fetch';
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import Styletron, {AtomicPrefixToken} from 'fusion-plugin-styletron-react';
import CsrfProtectionEnhancer from 'fusion-plugin-csrf-protection';
import ErrorHandling, {ErrorHandlerToken} from 'fusion-plugin-error-handling';
import Redux, {
  ReduxToken,
  ReducerToken,
  EnhancerToken,
  GetInitialStateToken,
} from 'fusion-plugin-react-redux';
import ReduxActionEmitterEnhancer from 'fusion-plugin-redux-action-emitter-enhancer';
import UniversalEvents, {
  UniversalEventsToken,
} from 'fusion-plugin-universal-events';
import nodeFetch from 'node-fetch';
import I18n, {
  I18nToken,
  I18nLoaderToken,
  createI18nLoader,
} from 'fusion-plugin-i18n-react';
import {FetchToken} from 'fusion-tokens';
import {
  ApolloRenderEnhancer,
  ApolloClientPlugin,
  ApolloClientToken,
  GraphQLEndpointToken,
  ApolloClientCredentialsToken,
  ApolloCustomLinksToken,
} from 'fusion-plugin-apollo-mod';
import {RenderToken} from 'fusion-core';

import reducer from './store/reducers';
import log from './monitoring';
import {AppConsts} from './lib';
import {graphqlLinks} from './utils';

import root from './root.js';

export default () => {
  const app = new App(root);
  // eslint-disable-next-line cup/no-undef
  __BROWSER__ && app.register(FetchToken, window.fetch);
  __NODE__ && app.register(FetchToken, nodeFetch);

  // Apollo setup
  app.enhance(RenderToken, ApolloRenderEnhancer);
  app.register(ApolloClientCredentialsToken, 'include');
  app.register(ApolloCustomLinksToken, graphqlLinks);
  app.register(ApolloClientToken, ApolloClientPlugin);
  app.register(GraphQLEndpointToken, AppConsts.graphqlEndpoint);

  // Basic
  app.register(HelmetPlugin);
  app.register(Styletron);
  app.register(AtomicPrefixToken, '_');
  app.register(Router);

  // Localization
  app.register(I18nToken, I18n);
  __NODE__
    ? app.register(I18nLoaderToken, createI18nLoader())
    : app.register(FetchToken, fetch);

  app.register(UniversalEventsToken, UniversalEvents);
  // eslint-disable-next-line cup/no-undef
  __BROWSER__ && app.register(FetchToken, window.fetch.bind(window));
  app.enhance(FetchToken, CsrfProtectionEnhancer);

  // Redux
  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);
  app.register(EnhancerToken, ReduxActionEmitterEnhancer);
  __NODE__ && app.register(GetInitialStateToken, async ctx => ({}));

  // Service worker
  /* app.register(LoggerToken, SWLoggerToken);
  app.register(SwPlugin);
  if (__BROWSER__) {
    app.register(SWRegisterToken, true);
  }
  if (__NODE__) {
    app.register(SWTemplateFunctionToken, swTemplateFunction);
    // app.register(SWcacheDuration, expiry);
  } */

  if (__NODE__) {
    app.register(ErrorHandlerToken, log);
    app.register(ErrorHandling);
  }

  return app;
};
