import './utils/modern-normalize.css';
import './index.css';
import './assets/fonts/fonts.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.addEventListener('DOMContentLoaded', () => {
  let loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      if (!loader) loader = document.querySelector('.loader');
      loader.style.opacity = '0';
      setTimeout(() => {
        if (!loader) loader = document.querySelector('.loader');
        loader.parentElement.removeChild(loader);
      }, 500);
    }, 500);
  }
  loader = null;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
