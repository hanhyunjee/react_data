import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './test02/Clock';
const root = ReactDOM.createRoot(document.getElementById("root"));
  setInterval(()=>{
    root.render(<Clock />);

  },1000);



reportWebVitals();