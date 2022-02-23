import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// For router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  // Wrap it around in a BrowserRouter for web to render
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);