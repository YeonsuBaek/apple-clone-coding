import React, { useState } from 'react';

const LocalNav = () => {
  const [toggleLocalbar, setToggleLocalbar] = useState(false);

  const handleToggleLacalbar = () => {
    setToggleLocalbar(!toggleLocalbar);
  };

  return (
    <nav
      className={
        toggleLocalbar
          ? 'z-40 sticky top-0 left-0 w-full max-h-52 border-b border-[#424245] bg-zinc-900/75 backdrop-blur-xl ease-in-out duration-500 transition-all lg:max-h-[52px] lg:bg-transparent lg:px-0'
          : 'z-40 sticky top-0 left-0 w-full max-h-12 border-b border-[#424245] bg-black/75 backdrop-blur-xl ease-in-out duration-300 delay-500 transition-all lg:max-h-[52px]'
      }
    >
      <div className='px-4 flex items-center justify-between w-full h-12 lg:max-w-screen-lg lg:h-[52px] lg:px-[22px] lg:mx-auto lg:my-0 '>
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
              <a className='text-xs text-white cursor-default' href='/'>
                Overview
              </a>
            </li>
            <li className='mr-6 opacity-90'>
              <a className='text-xs text-white hover:text-[#2997ff] active:text-[#2997ff]' href='/'>
                Switching to iPhone
              </a>
            </li>
            <li className='mr-6 opacity-90'>
              <a className='text-xs text-white hover:text-[#2997ff] active:text-[#2997ff]' href='/'>
                Tech Specs
              </a>
            </li>
          </ul>

          <a href='/' className='px-3 py-1 ml-3 text-xs button lg:ml-0'>
            Buy
          </a>
        </div>
      </div>

      <div
        className={
          toggleLocalbar
            ? 'translate-y-0 max-h-full opacity-100 ease-in-out duration-500 delay-300 overflow-auto lg:visibility-hidden'
            : 'translate-y-[-30px] max-h-0 opacity-0 ease-in-out duration-500 delay-300 overflow-hidden'
        }
      >
        <ul className='px-6 pt-1 pb-4'>
          <li className='w-full mr-6 opacity-60 border-b border-[#424245]'>
            <a className='flex items-center justify-start text-sm text-white cursor-default h-11' href='/'>
              Overview
            </a>
          </li>
          <li className='w-full mr-6 opacity-90 border-b border-[#424245]'>
            <a
              className='flex items-center justify-start h-11 text-sm text-white hover:text-[#2997ff] active:text-[#2997ff]'
              href='/'
            >
              Switching to iPhone
            </a>
          </li>
          <li className='w-full mr-6 opacity-90'>
            <a
              className='flex items-center justify-start h-11 text-sm text-white hover:text-[#2997ff] active:text-[#2997ff]'
              href='/'
            >
              Tech Specs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LocalNav;
