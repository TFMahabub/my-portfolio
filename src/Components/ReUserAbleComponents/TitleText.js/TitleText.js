import React from 'react';

const TitleText = ({top, down}) => {
  return (
    <article className='mt-10 lg:mt-16 lg:max-w-lg mx-auto'>
      <h4 className='text-center text-sky_blue text-2xl font-semibold tracking-wide'>{top}</h4>
      <h3 className='text-center text text-white text-3xl font-semibold tracking-wider'>{down}</h3>
    </article>
  );
};

export default TitleText;