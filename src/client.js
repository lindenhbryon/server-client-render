import React from "react";
import ReactDOM from "react-dom";
import App from './components/App/App';
import "./App.css";
import {store, persistor} from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'


const jsx = (
  <ReduxProvider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <App />
    </Router>
    </PersistGate>
  </ReduxProvider>
);

const app = document.getElementById( "app" );
ReactDOM.hydrate( jsx, app );