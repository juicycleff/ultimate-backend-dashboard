// @flow
// eslint-disable-next-line import/named
import {LOGIN_USER, LOGOUT_USER} from '../action-types';
// import type {User} from '../../generated/graphql';

export type AuthInitialStateProps = {
  user: any,
  isLoggedIn: boolean,
};

const authInitialState: AuthInitialStateProps = {
  user: null,
  isLoggedIn: false,
};

export default function(state = authInitialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      const {user, isLoggedIn} = action.payload;
      return {
        ...state,
        isLoggedIn,
        user: {
          ...user,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}
