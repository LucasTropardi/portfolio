import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { NamingProvider } from './naming/NamingContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <NamingProvider>
        <GlobalStyle />
        <App />
        </NamingProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
