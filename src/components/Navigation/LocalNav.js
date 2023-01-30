import React, { useState } from 'react';

const LocalNav = () => {
  const [toggleLocalbar, setToggleLocalbar] = useState(false);

  const handleToggleLacalbar = () => {
    setToggleLocalbar(!toggleLocalbar);
  };

  return (
    <nav className='lg:max-w-screen-lg lg:mx-auto lg:my-0 flex items-center justify-between px-4 lg:px-0 h-12 border-b border-[#424245]'>
      <a href='/' className='text-white text-[19px] text-bold tracking-[0.228px]'>
        iPhone 14 Pro
      </a>

      <div className='flex items-center justify-between'>
        <button className='relative w-10 h-8 focus lg:visibility-hidden' onClick={handleToggleLacalbar}>
          <span
            className={
              toggleLocalbar
                ? 'absolute top-4 left-2.5 block w-[11px] h-px bg-white rotate-[-40deg] rounded-l-[0.5px] ease-in-out duration-500'
                : 'absolute top-4 left-2.5 block w-[11px] h-px bg-white rotate-[40deg] rounded-l-[0.5px] ease-in-out duration-500'
            }
          ></span>
          <span
            className={
              toggleLocalbar
                ? 'absolute top-4 right-2.5 block w-3 h-px bg-white rotate-[40deg] rounded-r-[0.5px] ease-in-out duration-500'
                : 'absolute top-4 right-2.5 block w-3 h-px bg-white rotate-[-40deg] rounded-r-[0.5px] ease-in-out duration-500'
            }
          ></span>
        </button>

        <ul className='flex max-[1023px]:visibility-hidden'>
          <li className='mr-6 opacity-60'>
            <a className='text-xs font-["SF_Pro_Text"] text-white cursor-default' href='/'>
              Overview
            </a>
          </li>
          <li className='mr-6 opacity-90'>
            <a className='text-xs font-["SF_Pro_Text"] text-white hover:text-[#2997ff] active:text-[#2997ff]' href='/'>
              Switching to iPhone
            </a>
          </li>
          <li className='mr-6 opacity-90'>
            <a className='text-xs font-["SF_Pro_Text"] text-white hover:text-[#2997ff] active:text-[#2997ff]' href='/'>
              Tech Specs
            </a>
          </li>
        </ul>

        <a href='/' className='px-3 py-1 ml-3 text-xs button lg:ml-0'>
          Buy
        </a>
      </div>
    </nav>
  );
};

export default LocalNav;
