import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

export const graphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    credentials: 'include',
    uri: 'http://localhost:4000/graphql',
  })
});
