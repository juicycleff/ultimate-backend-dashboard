// @flow
import localForage from 'localforage';
import {SWITCH_TENANT} from '../action-types';
// import type {Tenant} from '../../generated/graphql';

export type TenantInitialStateProps = {
  currentTenant: any,
};

const tenantInitialState: TenantInitialStateProps = {
  currentTenant: async () => await localForage.getItem(SWITCH_TENANT),
};

export default function(state = tenantInitialState, action) {
  switch (action.type) {
    case SWITCH_TENANT: {
      const {currentTenant} = action.payload;
      return {
        ...state,
        currentTenant,
      };
    }
    default:
      return state;
  }
}
