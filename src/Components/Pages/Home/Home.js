import React from 'react';
import Nav from '../../Navbar/Nav';
import About from '../About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Skill from './Skill/Skill';

const Home = () => {
  return (
    <div className='lg:relative container max-w-[1020px] mx-auto px-4 lg:px-0'>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
};

export default Home;