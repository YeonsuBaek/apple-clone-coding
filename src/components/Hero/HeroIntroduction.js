import React from 'react';

const HeroIntroduction = () => {
  return (
    <div className='overflow-visible pb-[400px] md:pb-[450px] lg:pd-[500px]'>
      <div className='relative w-full h-[1800px] md:h-[1808px] lg:h-[1810px]'>
        <p className='w-[324px] mx-auto my-0 sticky top-0 translate-y-[calc(50vh-50%+48px*0.5)] text-[28px] font-semibold leading-[1.1] tracking-[0.19px] md:w-[609px] md:text-[40px] lg:w-[823px] lg:text-[56px]'>
          A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An
          innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.
        </p>
        <div className='lg:mt-[-25vh]'>
          <div className='w-[324px] h-[950px] mx-auto my-0 overflow-hidden mix-blend-darken md:w-[609px] lg:w-[823px]'>
            <img
              src='https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_background__ep8j6kim532a_small.png'
              alt=''
              className='object-cover w-full h-full'
            />
          </div>
          <div className='w-[324px] h-[950px] mx-auto my-0 overflow-hidden mix-blend-darken md:w-[609px] lg:w-[823px]'>
            <img
              src='https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_background__ep8j6kim532a_small.png'
              alt=''
              className='object-cover w-full h-full rotate-180'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroIntroduction;
