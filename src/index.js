import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* con este tipo de enrutado se trabaja */}
    <BrowserRouter basename="/">  
      <App />
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

