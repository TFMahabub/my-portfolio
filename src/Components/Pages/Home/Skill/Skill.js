import React from 'react';
import TitleText from '../../../ReUserAbleComponents/TitleText.js/TitleText';

const Skill = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express']
  return (
    <section>
      <TitleText top={'Skill'} down={'I Work Hard to Improve My Skills Regularly'}></TitleText>
      <div className='lg:mt-12 text-white'>
        
        <div>
          <h3 className='text-xl font-semibold tracking-wide'>HTML</h3>
          <div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;