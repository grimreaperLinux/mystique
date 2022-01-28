import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './Components/productDisplay';
import CarouselAdmin from './adminpanel/CarouselAdmin';
import Cardadmin from './adminpanel/CardAdmin';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="necklet" element={<ProductList title='Necklet'/>} />
      <Route path="eardrops" element={<ProductList title='Eardrops'/>} />
      <Route path="wristlet" element={<ProductList title='Wristlet'/>} />
      <Route path="carouseladmin" element={<CarouselAdmin/>} />
      <Route path="cardadmin" element={<Cardadmin/>} />
    </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
