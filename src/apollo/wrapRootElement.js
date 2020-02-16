import React from 'react';
import fetch from 'isomorphic-fetch';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  fetch
});

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  );
}