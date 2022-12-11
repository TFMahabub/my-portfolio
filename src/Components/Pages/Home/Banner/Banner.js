import React from 'react';
import BannerIMG from '../../../../Assets/BannerIMG.png'
import SmallButton from '../../../ReUserAbleComponents/SmallButton/SmallButton';
import Resumerea from '../../../../Assets/Resume.pdf'

const Banner = () => {
  return (
    <section 
    className='mx-auto lg:h-screen lg:flex lg:items-center
     lg:justify-between mt-6 lg:mt-0'
    >
      <div className='lg:w-1/2 mt-8 text-center lg:text-start'>
        <h2 className='text-3xl lg:text-5xl lg:font-bold tracking-wider'><span className='text-white'>Mahabub</span> <span className='text-sky_blue'>Alam</span></h2>
        <h4 className='lg:text-2xl font-medium uppercase text-white tracking-[.2rem]'>Front End Developer</h4>
        <a href={Resumerea} download>
          <SmallButton>Download Resume</SmallButton>
        </a>
      </div>
      <div className='lg:w-1/2 mt-12 lg:mt-0 lg:flex lg:justify-end'>
        <div className='w-60 lg:w-80 relative mx-auto lg:mx-0 bg-sky_blue rounded-full overflow-hidden'>
          <img 
          className='w-60 lg:w-80'
          src={BannerIMG}
          alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;