import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";

import config from './config';

const client = new ApolloClient({
  link: PrismicLink({
    // uri: `${process.env.REACT_APP_ENDPOINT_BASE}/graphql`
    uri: 'https://runroomopenspace.prismic.io/graphql'
  }),
  cache: new InMemoryCache(),
  repositoryName: config.APP_NAME,
  accessToken: config.TOKEN
});

export { client };

// import auth from './auth';
// import { defaults, resolvers, typeDefs } from './resolvers';

// const apollo = new ApolloClient({
//   clientState: { defaults, resolvers, typeDefs },
//   request: async operation => {
//     const token = await auth.getToken();
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     });
//   },
//   uri: process.env.REACT_APP_ENDPOINT_API + '/graphql'
// });

// export { http, apollo };
