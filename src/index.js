import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './App';

// IntersectionObserver polyfill
(async () => {
  if (!('IntersectionObserver' in window)) await import('intersection-observer');
})();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
