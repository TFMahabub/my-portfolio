import React from 'react';
import { Link } from 'react-router-dom';

const SingleProject = ({project}) => {
  const { name, img} = project;
  return (
    <div className='bg-card_blue p-4 rounded-xl hover:scale-110 duration-200'>
      <img src={img} className='rounded-md' alt="" />
      <h3 className='mt-2 text-lg font-semibold text-sky_blue'>{name}</h3>
        <button className='bg-sky_blue px-4 py-1 mt-2 text-white tracking-wide rounded-sm'>Details</button>
    </div>
  );
};

export default SingleProject;