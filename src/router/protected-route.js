// @flow
import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({
  path,
  component: Component,
  permission,
  render,
  ...rest
}: any) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={props => {
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: {from: props.location},
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
