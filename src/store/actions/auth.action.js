// @flow
// eslint-disable-next-line import/named
import {LOGIN_USER, LOGOUT_USER} from '../action-types';

export const loginUserAction = (user, isLoggedIn) => ({
  type: LOGIN_USER,
  payload: {
    user,
    isLoggedIn,
  },
});

export const logoutUserAction = () => ({
  type: LOGOUT_USER,
  payload: {
    user: null,
    isLoggedIn: false,
  },
});
