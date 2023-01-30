import React from 'react';

const LocalNav = () => {
  return (
    <nav className='flex items-center justify-between p-4 h-12 border-b border-[#424245]'>
      <a href='/' className='text-white text-[19px] text-bold tracking-[0.228px]'>
        iPhone 14 Pro
      </a>

      <div>
        <button className='relative w-10 h-8 focus'>
          <span className='absolute top-4 left-2.5 block w-[11px] h-px bg-white rotate-[40deg] rounded-l-[0.5px] '></span>
          <span className='absolute top-4 right-2.5 block w-3 h-px bg-white rotate-[-40deg] rounded-r-[0.5px]'></span>
        </button>

        <a href='/' className='px-3 py-1 ml-3 text-xs button'>
          Buy
        </a>
      </div>
    </nav>
  );
};

export default LocalNav;
