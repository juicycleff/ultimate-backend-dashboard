import * as React from 'react';
import {useCookies} from 'react-cookie';
import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component, permission, render, ...rest }: any) => {
  const [cookies] = useCookies(['session.app']);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!cookies['session.app']) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          );
        }

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
