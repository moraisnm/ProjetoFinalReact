import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarP from '../components/NavBar/NavBarPages/NavBarPages';
import Sofa from '../components/Sofa/Sofa';
import Footer from '../components/Footer/Footer';

const ProductReview: React.FC = () => {
  return (
    <div>
      <NavbarP/>
      <Sofa
        name="Nomad Fabric Sofa"
        price="$1,595"
      />
      <Footer/>
    </div>
  );
};

export default ProductReview;