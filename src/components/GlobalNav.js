import React from 'react';

function GlobalNav() {
  return (
    <>
      <li className='flex items-center justify-center w-12 h-full text-center'>
        <a
          href='/'
          className="focus block w-[17px] h-full bg-[length:17px_48px] lg:bg-[length:15px_44px] bg-no-repeat bg-[url('https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_small.svg')]"
        >
          <span className='hidden'>Apple</span>
        </a>
      </li>
      <li className='max-[1023px]:visibility-hidden h-full px-2'>
        <a
          href='/'
          className="flex items-center justify-center h-full text-[12px] font-['SF_Pro_Text'] text-white focus"
        >
          Store
        </a>
      </li>
      <li className='max-[1023px]:visibility-hidden h-full px-2'>
        <a
          href='/'
          className="flex items-center justify-center h-full px-2 text-[12px] font-['SF_Pro_Text'] text-white focus"
        >
          Mac
        </a>
      </li>
      <li className='max-[1023px]:visibility-hidden h-full px-2'>
        <a
          href='/'
          className="flex items-center justify-center h-full px-2 text-[12px] font-['SF_Pro_Text'] text-white focus"
        >
          iPad
        </a>
      </li>
      <li className='max-[1023px]:visibility-hidden h-full px-2'>
        <a
          href='/'
          className="flex items-center justify-center h-full px-2 text-[12px] font-['SF_Pro_Text'] text-white focus"
        >
          Watch
        </a>
      </li>
      <li className='max-[1023px]:visibility-hidden h-full px-2'>
        <a
          href='/'
          className="flex items-center justify-center h-full px-2 text-[12px] font-['SF_Pro_Text'] text-white focus"
        >
          AirPods
        </a>
      </li>
      <li className='max-[1023px]:visibility-hidden h-full px-2'>
        <a
          href='/'
          className="flex items-center justify-center h-full px-2 text-[12px] font-['SF_Pro_Text'] text-white focus"
        >
          TV & Home
        </a>
      </li>
      <li className='max-[1023px]:visibility-hidden h-full px-2'>
        <a
          href='/'
          className="flex items-center justify-center h-full px-2 text-[12px] font-['SF_Pro_Text'] text-white focus"
        >
          Only on Apple
        </a>
      </li>
      <li className='max-[1023px]:visibility-hidden h-full px-2'>
        <a
          href='/'
          className="flex items-center justify-center h-full px-2 text-[12px] font-['SF_Pro_Text'] text-white focus"
        >
          Accessories
        </a>
      </li>
      <li className='max-[1023px]:visibility-hidden h-full px-2'>
        <a
          href='/'
          className="flex items-center justify-center h-full px-2 text-[12px] font-['SF_Pro_Text'] text-white focus"
        >
          Support
        </a>
      </li>
      <li className='max-[1023px]:visibility-hidden h-full px-2'>
        <a
          href='/'
          className="focus block w-[15px] h-full bg-[length:15px_88px] bg-no-repeat bg-[url('https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg')]"
        >
          <span className='hidden'>Search</span>
        </a>
      </li>
    </>
  );
}

export default GlobalNav;
