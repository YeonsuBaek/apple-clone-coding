import React from 'react';
import { GrCirclePlay } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';

const HeroInformation = () => {
  return (
    <div className='relative h-[1720px] pb-[4vh] mt-[-25vh] md:h-[2352px] md:pb-[-4vh] md:mt-[-50vh]'>
      <div className='w-[324px] mx-auto my-0 sticky top-0 translate-y-[calc(50vh-50%+48px*0.5)] text-black z-30 font-semibold md:w-[609px] lg:w-[823px]'>
        <h2 className='pt-2 pb-3 text-7xl md:text-[148px] md:pb-9 md:ml-[-9px] lg:text-[200px] lg:ml-[-13px]'>
          Pro.
          <br /> Beyond.
        </h2>
        <p className='flex-col mb-5 text-xl leading-[1.1] md:flex-row md:text-2xl md:mb-6 lg:text-[32px] lg:mb-[38px]'>
          <span>iPhone 14 Pro and&nbsp;</span>
          <span>iPhone 14 Pro Max</span>
        </p>
        <p className='flex-col mb-5 text-xl leading-[1.1] md:flex-row md:text-lg lg:text-[24px] lg:mb-[32px]'>
          <span>From $41.62/mo. for 24 mo.&nbsp;</span>
          <span>or $999 before trade-in*</span>
        </p>
        <ul className='flex flex-col text-xl md:flex-row md:gap-12 md:text-lg lg:text-2xl'>
          <li className='mb-3.5'>
            <a href='/' className='flex items-center justify-start'>
              Watch the film <GrCirclePlay className='ml-1 font-bold' />
            </a>
          </li>
          <li className='mb-3.5'>
            <a href='/' className='flex items-center justify-start'>
              Watch the event <MdOutlineNavigateNext />
            </a>
          </li>
        </ul>
      </div>
      <div className='absolute top-[25vh] z-10 pb-[100px] bg-black md:top-[50vh]'>
        <div className='w-screen h-[810px] overflow-hidden md:h-[1176px]'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_background__ep8j6kim532a_small.png'
            alt=''
            className='object-cover w-full h-full'
          />
        </div>
        <div className='w-screen h-[810px] overflow-hidden md:h-[1176px]'>
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
