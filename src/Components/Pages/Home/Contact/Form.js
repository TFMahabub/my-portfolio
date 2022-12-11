import React from 'react';

const Form = () => {

  const handleOnSubmit = e =>{
    e.preventDefault()
  }
  return (
    <form onSubmit={handleOnSubmit} className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 mt-6'>
      <input className='border-2 border-text_mute rounded-lg bg-transparent' type="text" placeholder='Name'/>
      <input className='border-2 border-text_mute rounded-lg bg-transparent' type="text" placeholder='Email'/>
      <input className='border-2 border-text_mute rounded-lg bg-transparent' type="text" placeholder=''/>
      <input className='border-2 border-text_mute rounded-lg bg-transparent' type="text" placeholder=''/>
    </form>
  );
};

export default Form;