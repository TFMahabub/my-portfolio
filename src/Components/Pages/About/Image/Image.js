import React from 'react';
import AboutIMG from'../../../../Assets/AboutIMG.jpg'

const Image = () => {
  return (
    <div className='lg:w-1/2 lg:flex lg:justify-end'>
      <img src={AboutIMG} className='lg:w-3/4 rounded-lg' alt=''></img>
    </div>
  );
};

export default Image;