import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { Client } from "./client/credentials";
import "./index.css";
import App from "./App";


ReactDOM.render(
  <ApolloProvider client={Client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
