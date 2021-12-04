import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
  } from "@apollo/client";
  import { setContext } from "@apollo/client/link/context";

  const httpLink = createHttpLink({
    uri: "https://modern-herring-14.hasura.app/v1/graphql",
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token ="Rou6qPnkYGTCq7pRwZNG5nk3CVYWK3Wt1CVsIDb9pxYNALnnG1yN2EizpH4NX0kq";
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret": token,
      },
    };
  });
  
  export const Client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });