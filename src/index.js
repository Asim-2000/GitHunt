import { ThemeProvider } from '@chakra-ui/react';
import { CSSReset } from '@chakra-ui/css-reset';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

