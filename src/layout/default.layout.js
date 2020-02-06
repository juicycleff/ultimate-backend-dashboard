// @flow
import * as React from 'react';
import {Redirect, Route, Switch} from 'fusion-plugin-react-router';
import {authRouters} from '../router/router.config';

type DefaultLayoutProps = {
  children: any,
};

function AppLayout(props: DefaultLayoutProps) {
  return (
    <div>
      <Switch>
        {authRouters
          .filter((item: any) => !item.isLayout)
          .map((item: any, index: number) => (
            <Route
              key={index}
              path={item.path}
              component={item.component}
              exact={item.exact}
            />
          ))}

        <Redirect from="/auth" to="/auth/login" />
      </Switch>
    </div>
  );
}

export default AppLayout;
