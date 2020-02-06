// @flow
// eslint-disable-next-line import/named
import {SWITCH_TENANT} from '../action-types';

export const switchTenantAction = currentTenant => ({
  type: SWITCH_TENANT,
  payload: {
    currentTenant,
  },
});
