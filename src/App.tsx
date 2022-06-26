import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Router } from "./Router";
import { client } from "./lib/apollo";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
