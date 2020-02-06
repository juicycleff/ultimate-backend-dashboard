// @flow
import * as React from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';

const UnProtectedRoute = ({
  path,
  component: Component,
  permission,
  render,
  isLoggedIn,
  ...rest
}: any) => {
  const location = useLocation();
  const fromLink =
    (location.state && location.state.from && location.state.from.pathname) ||
    '/';

  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: fromLink,
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

function mapStateToProps(state) {
  const {auth} = state;
  return {isLoggedIn: auth.isLoggedIn};
}

export default connect(mapStateToProps)(UnProtectedRoute);
