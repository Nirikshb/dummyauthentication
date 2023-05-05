import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './App.css';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
