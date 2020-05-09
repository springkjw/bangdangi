import React from 'react';
import Route from './pages';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from 'graph';

export default () => (
  <div className="App bg-red-500">
    <ApolloProvider client={client}>
      <Route />
    </ApolloProvider>
  </div>
);
