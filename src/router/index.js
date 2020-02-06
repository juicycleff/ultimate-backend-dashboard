// @flow
import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import localForage from 'localforage';
import utils from '../utils/router.utils';
import ProtectedRoute from './protected-route';
import PageNotFound from '../pages/pageNotFound';
import UnProtectedRoute from './un-protected-route';
import {SWITCH_TENANT, switchTenantAction} from '../store';

const Router = () => {
  const dispatch = useDispatch();
  const currentTenant = useSelector(state => state.tenant.currentTenant);

  const AppLayout = utils.getRoute('/').component;
  const AuthLayout = utils.getRoute('/auth').component;

  // eslint-disable-next-line no-unused-vars
  const switchTenant = async () => {
    const localTenant = await localForage.getItem(SWITCH_TENANT);
    if (localTenant) {
      dispatch(switchTenantAction(localTenant));
    } else if (currentTenant === null || currentTenant === undefined) {
      // dispatch(switchTenantAction(data.tenants[0]));
    }
  };

  return (
    <Switch>
      <UnProtectedRoute
        path="/auth"
        render={(props: any) => <AuthLayout {...props} />}
      />
      <ProtectedRoute
        path="/"
        render={(props: any) => <AppLayout {...props} exact />}
      />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Router;
