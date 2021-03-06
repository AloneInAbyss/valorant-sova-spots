import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Map from './Map';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/breeze" element={<Map name="Breeze" />} />
      <Route path="/ascent" element={<Map name="Ascent" />} />
      <Route path="/fracture" element={<Map name="Fracture" />} />
      <Route path="/icebox" element={<Map name="Ice Box" />} />
    </Routes>
  </BrowserRouter>
);
