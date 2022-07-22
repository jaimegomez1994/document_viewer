import Container from "./Components/Container";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client"
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
    const link = from([
  new HttpLink({uri:"https://graphql.sketch.cloud/api/"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})
  return (
    <ApolloProvider client={client}>

    <Provider store={store}>
      <Container/>
    </Provider>
    </ApolloProvider>
  );
}

export default App;
