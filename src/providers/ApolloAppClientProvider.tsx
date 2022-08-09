import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { services } from '../services';

const ApolloAppClientProvider = ({ children }) => {
  return <ApolloProvider client={services.apolloGraphqlAppClient}>{children}</ApolloProvider>;
};

export default ApolloAppClientProvider;
