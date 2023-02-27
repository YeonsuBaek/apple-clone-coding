import React from 'react';

const Privacy = () => {
  return (
    <div className='border-t-2 border-[#6e6e73] py-6 flex justify-between basis-full md:py-[18px]'>
      <figure
        loading='lazy'
        className='animate-[lock_2000ms_0ms_ease-in-out_forwards] w-[28px] h-[38px] bg-[length:224px_228px] bg-[url("https://www.apple.com/v/iphone-14-pro/c/images/overview/shared/icon_privacy__h1tub3ldvgae_medium_2x.png")]'
      ></figure>
      <p className='p-0 max-w-[83.3%] basis-[83.3%] text-[19px] leading-[23px] tracking-[0.228px] md:text-[17px] lg:max-w-[41.6%] lg:basis-[41.6%] lg:text-[19px]'>
        iPhone is also designed from the ground up to protect your privacy and put you in control of what you share and
        who you share it with
      </p>
    </div>
  );
};

export default Privacy;
