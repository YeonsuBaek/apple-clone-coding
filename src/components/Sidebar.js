import React from 'react';

const Sidebar = (props) => {
  return (
    <aside
      className={
        props.toggle
          ? 'absolute top-12 left-0 w-screen h-[calc(100vh-48px)] bg-black ease-in duration-500 opacity-100'
          : 'overflow-y-hidden lg:visibility-hidden ease-in duration-300 h-0 opacity-0'
      }
    >
      <div className='mb-1 px-2.5 h-[53px] w-full flex items-start justify-center border-b border-[#424245]'>
        <form className='relative mx-auto my-0 w-full max-w-[584px]'>
          <button className="focus absolute top-0 left-0 w-[30px] h-9 bg-no-repeat bg-left-[8px] bg-center bg-[url('https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_small.svg')]"></button>
          <input
            type='text'
            placeholder='Search apple.com'
            className="pl-[30px] rounded-lg w-full block h-9 bg-[#1d1d1f] outline-0 text-[17px] placeholder:font-['SF_Pro_Text'] leading-[1.23536] tracking-[0.022em] placeholder:text-[#6e6e73]"
          />
        </form>
      </div>

      <div className='px-10'>
        <ul className='max-w-[584px] mx-auto my-0'>
          <li className='h-11 text-[17px] border-b border-[#424245]'>
            <a href='/' className='flex items-center w-full h-full'>
              Store
            </a>
          </li>
          <li className='h-11 text-[17px] border-b border-[#424245]'>
            <a href='/' className='flex items-center w-full h-full'>
              Mac
            </a>
          </li>{' '}
          <li className='h-11 text-[17px] border-b border-[#424245]'>
            <a href='/' className='flex items-center w-full h-full'>
              iPad
            </a>
          </li>
          <li className='h-11 text-[17px] border-b border-[#424245]'>
            <a href='/' className='flex items-center w-full h-full'>
              iPhone
            </a>
          </li>
          <li className='h-11 text-[17px] border-b border-[#424245]'>
            <a href='/' className='flex items-center w-full h-full'>
              Watch
            </a>
          </li>{' '}
          <li className='h-11 text-[17px] border-b border-[#424245]'>
            <a href='/' className='flex items-center w-full h-full'>
              AirPods
            </a>
          </li>{' '}
          <li className='h-11 text-[17px] border-b border-[#424245]'>
            <a href='/' className='flex items-center w-full h-full'>
              TV & Home
            </a>
          </li>
          <li className='h-11 text-[17px] border-b border-[#424245]'>
            <a href='/' className='flex items-center w-full h-full'>
              Only on Apple
            </a>
          </li>{' '}
          <li className='h-11 text-[17px] border-b border-[#424245]'>
            <a href='/' className='flex items-center w-full h-full'>
              Accessories
            </a>
          </li>{' '}
          <li className='h-11 text-[17px]'>
            <a href='/' className='flex items-center w-full h-full'>
              Support
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
