import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/NavBar/NavBarHome/NavBar';
import HeroSection from '../components/HeroSection/HeroSection';
import ImageProducts from '../components/Products/Products';
import InformationGeneral from '../components/InformationGeneral/InformationGeneral';
import ProductShowcase from '../components/ProductShowcase/ProductShowcase';
import Comments from '../components/Comments/Comments';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import VideoSection from '../components/VideoSection/VideoSection';
import Footer from '../components/Footer/Footer';

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ImageProducts />
      <InformationGeneral />
      <ProductShowcase />
      <Comments />
      <ImageSlider />
      <VideoSection/>
      <Footer />
    </div>
  );
};

export default Homepage;