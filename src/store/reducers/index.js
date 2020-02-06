// @flow
import {combineReducers} from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import authReducer from './auth.reducer';
import tenantReducer from './tenant.reducer';

const reducers = {
  // session: sessionReducer,
  auth: authReducer,
  tenant: tenantReducer,
  asyncInitialState: asyncInitialState.innerReducer,
};

export default asyncInitialState.outerReducer(combineReducers(reducers));
