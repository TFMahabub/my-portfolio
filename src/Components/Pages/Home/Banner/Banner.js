import React from 'react';
import BannerIMG from '../../../../Assets/BannerIMG.jpg'

const Banner = () => {
  return (
    <section 
    className='container mx-auto lg:h-screen border-2 
    border-sky_blue lg:flex lg:items-center
     lg:justify-between'
    >
      <div className='w-1/2'>
        <h2>Mahabub Alam</h2>
      </div>
      <div className='w-1/2'>
        <img 
        className='lg:w-96 rounded-full'
        src={BannerIMG}
         alt="" />
      </div>
    </section>
  );
};

export default Banner;