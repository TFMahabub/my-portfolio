import React from 'react';
import TitleText from '../../ReUserAbleComponents/TitleText.js/TitleText';
import AboutArticle from './Article/AboutArticle';
import Image from './Image/Image';

const About = () => {
  return (
    <section className=''>
      <TitleText top={'About me'} down={'A Passionate Developer Who Loves to Code'}></TitleText>
      <div className='mt-6 lg:flex lg:space-x-14'>
        <Image></Image>
        <AboutArticle></AboutArticle>
      </div>
    </section>
  );
};

export default About;