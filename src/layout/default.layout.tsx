import {Box} from 'grommet';
import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect, Route, Switch } from 'react-router-dom';
import {publicRouters} from '../router/router.config';
import utils from '../utils';
import { DefaultLayoutProps } from './layout.props';
import {GridWrapper} from './styles/app-layout.styles';

function DefaulLayout(props: DefaultLayoutProps) {
  const {
    location: { pathname },
  } = props;

  return (
    <DocumentTitle title={utils.getPageTitle(pathname)}>
      <GridWrapper>
        <Box gridArea='header' />
        <Box gridArea='main' fill={true}>
          <Switch>
            {publicRouters
              .filter((item: any) => !item.isLayout)
              .map((item: any, index: number) => (
                <Route key={index} path={item.path} component={item.component} exact={item.exact} />
              ))}

            <Redirect from='/' to='/login' />
          </Switch>
        </Box>
        <Box gridArea='footer' />
      </GridWrapper>
    </DocumentTitle>
  );
}

DefaulLayout.displayName = 'DefaulLayout';

export default DefaulLayout;
