//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Bootstrap
import './bootstrap.min.css';

//Styles
import './index.css';

//App
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
