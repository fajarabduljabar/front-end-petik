import React from 'react';
import Hero from '../component/Hero';
import Products from '../component/Products';
import NavbarComponent from '../component/Navbar';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <div>
      <NavbarComponent/>
      <Hero/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home;
