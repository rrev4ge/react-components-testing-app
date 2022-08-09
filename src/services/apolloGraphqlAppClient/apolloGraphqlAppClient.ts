import { ApolloClient, createHttpLink, from, InMemoryCache, ServerError } from '@apollo/client';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import CONSTANTS from '../../config/CONSTANTS';
import { errorHandlers } from '../../utils';

const httpLink = createHttpLink({
  uri: `${CONSTANTS.APP_API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(window.localStorage.getItem(CONSTANTS.APP_API_CACHE_STORAGE_OAUTH_POINT) || '{}')[
    CONSTANTS. APP_API_CACHE_STORAGE_ACCESS_TOKEN_POINT
  ];
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError((error: ErrorResponse) => {
  console.log({apolloError: error});
  const { graphQLErrors, networkError} = error;
  if (graphQLErrors && !networkError) {
    errorHandlers.apolloErrorsHandler(graphQLErrors);
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    const { result } = networkError as ServerError;
    if (result) {
      errorHandlers.apolloErrorsHandler(networkError);
    }
  }
});

const apolloGraphqlAppClient = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  name: 'TranslationDashboardUI-DEV',
  cache: new InMemoryCache(),
});

export default apolloGraphqlAppClient;
