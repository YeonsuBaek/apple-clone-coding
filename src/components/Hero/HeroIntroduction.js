import React from 'react';

const HeroIntroduction = () => {
  return (
    <div className='overflow-visible pb-[400px]'>
      <div className='relative w-full h-[1800px]'>
        <p className='w-[324px] mx-auto my-0 sticky top-0 translate-y-[calc(50vh-50%+48px*0.5)] text-[28px] font-bold leading-[1.1] tracking-[0.19px]'>
          A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An
          innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.
        </p>
        <div className='h-[950px] overflow-hidden mix-blend-darken'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_background__ep8j6kim532a_small.png'
            alt=''
            className='object-cover w-full h-full'
          />
        </div>
        <div className='h-[950px] overflow-hidden rotate-180 mix-blend-darken'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_background__ep8j6kim532a_small.png'
            alt=''
            className='object-cover w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroIntroduction;
