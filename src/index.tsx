import { ApolloProvider } from '@apollo/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {graphqlClient} from './client';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
