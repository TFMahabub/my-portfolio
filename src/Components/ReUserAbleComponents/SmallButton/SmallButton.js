import React, { Children } from 'react';

const SmallButton = ({children}) => {
  return (
    <button className='text-white bg-sky_blue py-4 px-8 text-2xl mt-4 rounded-full'>
      {children}
    </button>
  );
};

export default SmallButton;