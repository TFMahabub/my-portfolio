import React from 'react';
import TitleText from '../../../ReUserAbleComponents/TitleText.js/TitleText';
import dailyDealCars from '../../../../Assets/Projects/Daily-Deal-Cars.png'
import enTop from '../../../../Assets/Projects/En-Top.png'
import makeMyTrip from '../../../../Assets/Projects/Make-My-Trip.png'
import doctorsPortal from '../../../../Assets/Projects/Doctors-Portal.png'
import geniusCars from '../../../../Assets/Projects/Genius-Cars.png'
import SingleProject from './SingleProject';

const Project = () => {
  const projects = [
    {id: 1, name: 'Daily Deal Cars', img: dailyDealCars, description: ''},
    {id: 2, name: 'En Top', img: enTop, description: ''},
    {id: 3, name: 'Make My Trip', img: makeMyTrip, description: ''},
    {id: 4, name: 'Doctors Portal', img: doctorsPortal, description: ''},
    {id: 5, name: 'Genius Cars', img: geniusCars, description: ''},
  ]
  return (
    <div>
      <TitleText top={'Project'} down={'What I Do'}></TitleText>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14'>
        {
          projects.map(project=>
          <SingleProject
            key={project.id}
            project={project}
          >
          </SingleProject>)
        }  
      </div>
    </div>
  );
};

export default Project;