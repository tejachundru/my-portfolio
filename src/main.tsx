import { type Store } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store/configureStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={configureStore}>
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
);
