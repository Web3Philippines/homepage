import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Hotjar from '@hotjar/browser';

const siteId = 3926974;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
