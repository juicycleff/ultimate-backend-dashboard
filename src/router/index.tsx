import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import utils from '../utils';
import ProtectedRoute from './protected-route';

const Router = () => {
  const AppLayout = utils.getRoute('/app').component;
  const PublicLayout = utils.getRoute('/').component;

  return (
    <Switch>
      <ProtectedRoute path='/app' render={(props: any) => <AppLayout {...props} />} />
      <Route path='/' render={(props: any) => <PublicLayout {...props} />} />
    </Switch>
  );
};

export default Router;
