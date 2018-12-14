import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";
const httpLink = createHttpLink({
  fetchOptions: {
    credentials: "include"
  },
  uri: process.env.REACT_APP_BACKEND_URL
  // uri: 'http://localhost:4000'
});

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      tweetDetailsAndReplies: (_, args, { getCacheKey }) =>
        getCacheKey({ __typename: "Tweet", id: args.id })
    }
  }
});
//with client state is if one using it as local state
//we are not using here ,but may need in future
const defaults = {};
const resolvers = {
  Mutation: {}
};
const stateLink = withClientState({
  cache,
  defaults,
  resolvers
});

const link = ApolloLink.from([stateLink, httpLink]);
function createClient() {
  return new ApolloClient({
    cache,
    link
  });
}
export default createClient;
