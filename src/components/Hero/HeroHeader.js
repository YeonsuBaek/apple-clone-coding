import React from 'react';

const HeroHeader = () => {
  return (
    <div>
      <h1 className='mt-[59px] mb-[52px] md:mt-[124px] md:mb-[111px] lg:mt-[119px] lg:mb-[106px]'>
        <span className='min-[0px]:visibility-hidden'>iPhone 14 Pro and iPhone 14 Pro Max</span>
        <div className='w-[310px] h-[91px] mx-auto my-0 md:w-[539px] md:h-[158px] lg:w-[700px] lg:h-[204px]'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_logo__fyok6s0bvo2u_small_2x.jpg'
            alt='/'
            className='object-cover w-full h-auto'
          />
        </div>
      </h1>
      <div className='w-[91%] max-w-[490px] h-full overflow-hidden mx-auto my-0 md:w-[756px] md:max-w-none lg:w-[1116px] lg:h-[928px]'>
        <img
          src='https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_iphone_14_pro__e0act2165xqq_small_2x.jpg'
          alt=''
          className='object-cover w-full h-auto'
        />
      </div>
    </div>
  );
};

export default HeroHeader;
