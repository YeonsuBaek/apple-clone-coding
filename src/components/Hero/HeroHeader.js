import React, { useRef } from 'react';

const HeroHeader = () => {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setTimeout(() => {
      videoRef.current.play();
    }, 500);
  };

  return (
    <div className='relative md:h-[794px]'>
      <h1 className='mt-[59px] mb-[52px] w-full md:mt-[124px] md:mb-[111px] md:absolute md:opacity-0 md:animate-[fadeout_300ms_400ms_ease-out_forwards] lg:mt-[119px] lg:mb-[106px]'>
        <span className='min-[0px]:visibility-hidden'>iPhone 14 Pro and iPhone 14 Pro Max</span>
        <div className='w-[310px] h-[91px] mx-auto my-0 md:w-[539px] md:h-[158px] lg:w-[700px] lg:h-[204px]'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_logo__fyok6s0bvo2u_medium_2x.jpg'
            alt='/'
            className='object-cover w-full h-auto'
          />
        </div>
      </h1>
      <div className='flex justify-center will-change-transform'>
        <div className='will-change-transform max-[767px]:visibility-hidden w-[1068px] h-[794px] lg:w-screen'>
          <video
            muted
            preload='none'
            src='https://www.apple.com/105/media/us/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/hero/medium_2x.mp4'
            className='object-contain w-full h-full'
            ref={videoRef}
            onLoadStart={handlePlayVideo}
          ></video>
        </div>
      </div>
      <div className='md:visibility-hidden w-[91%] max-w-[490px] h-full overflow-hidden mx-auto my-0 md:w-[756px] md:max-w-none lg:max-w-full lg:w-[1116px] lg:h-[928px]'>
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
