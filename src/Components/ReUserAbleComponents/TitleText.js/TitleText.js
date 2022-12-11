import React from 'react';

const TitleText = ({top, down}) => {
  return (
    <article className='mt-10 lg:mt-[7rem] lg:max-w-lg mx-auto'>
      <h4 className='text-center text-sky_blue text-2xl font-semibold tracking-wide'>{top}</h4>
      <h3 className='text-center text text-white text-xl lg:text-3xl lg:font-medium tracking-wider'>{down}</h3>
    </article>
  );
};

export default TitleText;