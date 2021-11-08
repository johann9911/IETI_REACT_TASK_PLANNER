import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataProvider } from "./providers/DataProvider";
import { ChakraProvider } from "@chakra-ui/react";
import ServiceApi from './services/ServiceApi';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <DataProvider>
        <ServiceApi>
          <App />
        </ServiceApi>
      </DataProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
