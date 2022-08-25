// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri: "https://adaec96810.nxcli.net/graphql",
    cache: new InMemoryCache(),
    credentials: 'include',
    ssrMode: true,
    headers: {
      origin: "*"
    }
});

export default client;