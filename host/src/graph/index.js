import ApolloClient from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {host} from 'utils/axios';

const link = createHttpLink({
  uri: `${host}/graphql/`,
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      },
    })
  },
});
