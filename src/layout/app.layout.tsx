import { Box, Grid } from 'grommet';
import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect, Route, Switch } from 'react-router-dom';
import { appRouters } from '../router/router.config';
import utils from '../utils';
import { DefaultLayoutProps } from './layout.props';

function AppLayout(props: DefaultLayoutProps) {

  const {
    location: { pathname },
  } = props;

  return (
    <DocumentTitle title={utils.getPageTitle(pathname)}>
      <Grid
        rows={['xxsmall', 'xsmall']}
        columns={['xsmall', 'small']}
        gap='small'
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'nav', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea='header' background='brand' />
        <Box gridArea='nav' background='light-5' />
        <Box gridArea='main'>
          <Switch>
            {appRouters
              .filter((item: any) => !item.isLayout)
              .map((item: any, index: number) => (
                <Route key={index} path={item.path} component={item.component} exact={item.exact} />
              ))}

            <Redirect from='/app' to='/app/dashboard' />
          </Switch>
        </Box>
      </Grid>
    </DocumentTitle>
  );
}

AppLayout.displayName = 'AppLayout';

export default AppLayout;
