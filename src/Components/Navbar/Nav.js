import React, { useState } from 'react';

const Nav = () => {
  const [hamberger, setHamberger] = useState(false)
  const navManue= [
    {name: 'Home', link: '#home'},
    {name: 'About', link: '#home'},
    {name: 'Service', link: '#home'},
    {name: 'Portfolio', link: '#home'},
    {name: 'Blog', link: '#home'},
    {name: 'Contact', link: '#home'},
  ]
  return (
      <nav className='lg:absolute border-2 border-sky_blue w-full'>
      <header className="p-4 lg:p-0 dark:text-gray-100">
        <div className="flex justify-between items-center h-16 mx-auto">
          <h3 className='text-2xl font-semibold text-white'>MAHABUB</h3>
          {
            hamberger &&
            <ul className={`items-stretch lg:hidden text-[#fff]`}>
            {
              navManue.map(menu=> 
              <li className="flex">
                <a rel="noopener noreferrer hover:" href={menu.link} className="flex items-center px-4">{menu.name}</a>
              </li>)
            }   
            </ul>
          }
          <ul className={`items-stretch hidden text-[#fff] text-md tracking-wider space-x-1 md:flex`}>
            {
              navManue.map(menu=> 
              <li className="flex">
                <a rel="noopener noreferrer" href={menu.link} className="flex items-center hover:text-sky_blue px-4">{menu.name}</a>
              </li>)
            }
            
          </ul>
          <button onClick={()=>setHamberger(!hamberger)} className="flex text-white justify-end p-4 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
      </nav>
  );
};

export default Nav;