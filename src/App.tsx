import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Homepage from './pages/homepage';
import AllProducts from './pages/allProducts';
import ProductReview from './pages/productReview';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/details" element={<ProductReview />} />
      </Routes>
    </Router>
  );
};
const Home: React.FC = () => {
  return (
    <div className="App">
      <Homepage />
      <AllProducts />
      <ProductReview />
    </div>
  );
};

export default App;
