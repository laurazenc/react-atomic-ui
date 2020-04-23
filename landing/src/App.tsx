import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Header'

import { theme } from '@react-layouts'


const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;



function App() {
  return (
    <ThemeProvider {...{theme}}>
      <div className="App">
        <Header/>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
