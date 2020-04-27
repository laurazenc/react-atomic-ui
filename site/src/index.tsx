import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './routes';
import * as serviceWorker from './serviceWorker';


import { theme } from './react-atomic'
import { Header, Footer } from './components'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
      <Header />
        <Router>
          <Routes />
        </Router>
      <Footer />
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
