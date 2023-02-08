import React from 'react';
import { GrCirclePlay } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';

const HeroInformation = () => {
  return (
    <div className='relative h-[1620px] pb-[25vh] mt-[-25vh]'>
      <div className='w-[324px] mx-auto my-0 sticky top-0 translate-y-[calc(50vh-50%+48px*0.5)] text-black z-30 font-semibold'>
        <h2 className='pt-2 pb-3 text-7xl'>
          Pro.
          <br /> Beyond.
        </h2>
        <p className='mb-5 text-xl leading-[1.1]'>
          iPhone 14 Pro and
          <br />
          iPhone 14 Pro Max
        </p>
        <p className='mb-5 text-xl leading-[1.1]'>
          From $41.62/mo. for 24 mo.
          <br />
          or $999 before trade-in*
        </p>
        <ul>
          <li className='mb-3.5 text-xl'>
            <a href='/' className='flex items-center justify-start'>
              Watch the film <GrCirclePlay className='ml-1 font-bold' />
            </a>
          </li>
          <li className='mb-3.5 text-xl'>
            <a href='/' className='flex items-center justify-start'>
              Watch the event <MdOutlineNavigateNext />{' '}
            </a>
          </li>
        </ul>
      </div>
      <div className='absolute top-[25vh] z-10'>
        <div className='w-full h-[810px] overflow-hidden'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_background__ep8j6kim532a_small.png'
            alt=''
            className='object-cover w-full h-full'
          />
        </div>
        <div className='w-full h-[810px] overflow-hidden'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_background__ep8j6kim532a_small.png'
            alt=''
            className='object-cover w-full h-full rotate-180'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroInformation;
