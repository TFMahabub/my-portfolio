import React, { Children } from 'react';

const SmallButton = ({children}) => {
  return (
    <button className='text-white bg-sky_blue py-3 px-8 lg:text-xl mt-4 rounded-full'>
      {children}
    </button>
  );
};

export default SmallButton;