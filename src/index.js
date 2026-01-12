import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';   // ← IMPORTANT (theme file)
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
