import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarP from '../components/NavBar/NavBarPages/NavBarPages';
import ProductsSeating from '../components/ProductsSeating/ProductsSeating';
import Footer from '../components/Footer/Footer';

const AllProducts: React.FC = () => {
  return (
    <div>
      <NavbarP/>
      <ProductsSeating />
      <Footer/>
    </div>
  );
};

export default AllProducts;