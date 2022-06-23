import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import AppetiserPage from './components/appetisers';
import Contact from './components/contacts';

import DesertPage from './components/desert';
import MaincoursePage from './components/maincourse';
import Values from './components/values';
import { CartProvider } from './contexts/cartContext';
import { ModalProvider } from './contexts/modalcontext';
import Checkout from './components/checkout';
const root = ReactDOM.createRoot(document.getElementById('root'));


  
root.render(
  
  <CartProvider>
  <ModalProvider>
  <BrowserRouter>
    
    <Routes>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/appetisers" element={<AppetiserPage />} />
      
      <Route path="/contacts" element={<Contact />} />
      <Route path="/desert" element={<DesertPage />} />
      <Route path="/maincourse" element={<MaincoursePage />} />
      <Route path="/values" element={<Values />} />
      <Route path="/" element={<App />}/>
      
        
      
    </Routes>
  
  </BrowserRouter>
  </ModalProvider>
  </CartProvider>
);


