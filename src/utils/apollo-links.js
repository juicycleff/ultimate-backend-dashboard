// @flow
import {onError} from 'apollo-link-error';

const linkError = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

    const unAuth =
      graphQLErrors && graphQLErrors.reduce(mess => mess.statusCode === 403);
    if (unAuth) {
      // dispatch(loginUserAction({isLoggedIn: false}));
    } else {
      // dispatch(loginUserAction({isLoggedIn: true}));
    }
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);

  console.log(graphQLErrors);
  console.log(networkError);
});

export const graphqlLinks = [linkError];
