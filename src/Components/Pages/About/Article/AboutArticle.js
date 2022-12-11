import React from 'react';

const AboutArticle = () => {
  return (
    <article className='lg:w-1/2 text-white mt-6 lg:mt-0'>
      <h4 className='text-2xl font-medium'>About Me</h4>
      <p className='tracking-widest font-light text-text_mute'>I love to do coding. My favorite thing about coding is always trying to learn something new, explore new logic and apply this to web projects. I will always be comfortable working with a team.</p>
      <div className='mt-8 lg:flex border-2 border-text_mute rounded-lg'>
        <div className='p-6 lg:border-r-2 border-text_mute'>
          <h4 className='tracking-wide'>Name</h4>
          <p className='font-light text-text_mute text-sm tracking-wide'>Mahabub Alam</p>
          <h4 className='tracking-wide mt-4'>Email</h4>
          <p className='font-light text-text_mute text-sm tracking-wide'>rjmahabub543@gmail.com</p>
          <h4 className='tracking-wide mt-4'>Phone</h4>
          <p className='font-light text-text_mute text-sm tracking-wide'>+8801636725669</p>
        </div>
        <div className='px-6 pb-6 lg:pb-0 lg:p-6'>
          <h4 className='tracking-wide'>Address</h4>
          <p className='font-light text-text_mute text-sm tracking-wide'>Dhaka, Bangladesh</p>
          <h4 className='tracking-wide mt-4'>Degree</h4>
          <p className='font-light text-text_mute text-sm tracking-wide'>Bachelor</p>
          <h4 className='tracking-wide mt-4'>Remotely Work</h4>
          <p className='font-light text-text_mute text-sm tracking-wide'>Available</p>
        </div>
      </div>
    </article>
  );
};

export default AboutArticle;