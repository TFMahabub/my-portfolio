import React from 'react';
import Nav from '../../Navbar/Nav';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div className='relative'>
      <Nav></Nav>
      <Banner></Banner>
    </div>
  );
};

export default Home;