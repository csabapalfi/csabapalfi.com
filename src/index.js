import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement.hasChildNodes()) {
  ReactDOM.render(<App />, rootElement);
}