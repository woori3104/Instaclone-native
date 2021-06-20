import {
  ApolloClient,
  from,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN = "token";
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const tokenVar = makeVar("");

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  window.location.reload();
};

export const logUserIn = async (token:string) => {
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["loggedIn", JSON.stringify("yes")],
  ]);
  isLoggedInVar(true);
  tokenVar(token);
};


export const darkModeVar = makeVar(false);
const httpLinkOptions = {
  fetch,
    uri: "http://localhost:4000/graphql",
}
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});


const uploadHttpLink = createUploadLink(httpLinkOptions);
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(uploadHttpLink)]),
  cache: new InMemoryCache(),
 });

export default client;