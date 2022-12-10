import React from 'react';
import Nav from '../../Navbar/Nav';
import About from '../About/About';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div className='lg:relative container mx-auto px-4 lg:px-0'>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default Home;