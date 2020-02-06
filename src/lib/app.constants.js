// @flow

export const AppConsts = {
  userManagement: {
    defaultAdminUserName: 'admin',
  },
  localization: {
    defaultLocalizationSourceName: 'Mop',
  },
  authorization: {
    encrptedAuthTokenName: 'enc_auth_token',
  },
  // eslint-disable-next-line cup/no-undef
  appBaseUrl: process.env.REACT_APP_BASE_URL,
  // eslint-disable-next-line cup/no-undef
  remoteServiceBaseUrl: process.env.REACT_APP_REMOTE_SERVICE_BASE_URL,

  graphqlEndpoint: 'https://localhost/graphql',
};
export default AppConsts;
