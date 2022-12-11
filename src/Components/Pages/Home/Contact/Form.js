import React from 'react';

const Form = () => {

  const handleOnSubmit = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;

    console.log(name, email, phone, subject, message);
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 mt-6 text-text_mute'>
        <input className='border-2 border-text_mute rounded-lg bg-transparent py-2 px-4' name='name' type="text" placeholder='Your Name'/>
        <input className='border-2 border-text_mute rounded-lg bg-transparent py-2 px-4' name='email' type="email" placeholder='Your Email'/>
        <input className='border-2 border-text_mute rounded-lg bg-transparent py-2 px-4' name='phone' type="text" placeholder='Your Phone'/>
        <input className='border-2 border-text_mute rounded-lg bg-transparent py-2 px-4' name='subject' type="text" placeholder='Subject'/>
        <textarea className='rounded-lg py-2 px-4 col-span-2' type="text" name='message' placeholder='White your message here'></textarea>
      </div>
      <button className='mt-4 text-white bg-sky_blue py-3 px-10 rounded-lg text-xl tracking-wide'>Submit Now</button>
    </form>
  );
};

export default Form;