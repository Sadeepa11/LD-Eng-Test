// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProductDetail from './ProductDetail';
import './App.css'
import SingleProductPage from './SingleProductPage';

const App = () => {
  return (
    <Router>
   
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productName" element={<ProductDetail />} />
          <Route path="/products/:productName/:modelName" element={<SingleProductPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
