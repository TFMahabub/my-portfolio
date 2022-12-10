import React from 'react';
import BannerIMG from '../../../../Assets/BannerIMG.png'
import SmallButton from '../../../ReUserAbleComponents/SmallButton/SmallButton';
import Resumerea from '../../../../Assets/Resume.pdf'

const Banner = () => {
  return (
    <section 
    className='container mx-auto lg:h-screen border-2 
    border-sky_blue lg:flex lg:items-center
     lg:justify-between'
    >
      <div className='w-1/2'>
        <h2 className='text-[4rem] font-bold tracking-wider'><span className='text-white'>Mahabub</span> <span className='text-sky_blue'>Alam</span></h2>
        <h4 className='text-4xl font-medium uppercase text-white tracking-[.2rem]'>Front End Developer</h4>
        <a href={Resumerea} download>
          <SmallButton>Download Resume</SmallButton>
        </a>
      </div>
      <div className='w-1/2 lg:flex justify-end'>
        <div className='relative bg-sky_blue rounded-full overflow-hidden'>
          <img 
          className='lg:w-96'
          src={BannerIMG}
          alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;