import React, { useState } from 'react';
import GlobalNav from './GlobalNav';
import Sidebar from './Sidebar';

function Header() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <>
      <nav
        className={
          toggleSidebar
            ? `w-full h-full bg-transparent flex items-center justify-between lg:block lg:px-[22px]`
            : `w-full h-full bg-[#161617cc]/80 flex items-center justify-between lg:block lg:px-[22px]`
        }
      >
        <ul className='flex items-center justify-between w-full h-12 reletive lg:max-w-screen-lg lg:h-11 lg:my-0 lg:mx-auto lg:px-[22px]'>
          <li className='flex items-center justify-center w-12 h-full text-center lg:visibility-hidden'>
            <button onClick={handleToggleSidebar} className='w-full h-full focus display'>
              <label className='relative block w-full h-full'>
                <span
                  className={
                    toggleSidebar
                      ? 'rotate-45 block w-[17px] h-px bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in duration-200'
                      : 'rotate-0 block w-[17px] h-px bg-white absolute top-5 left-[50%] translate-x-[-50%] translate-y-0 ease-in duration-200'
                  }
                ></span>
                <span
                  className={
                    toggleSidebar
                      ? 'rotate-[-45deg] block w-[17px] h-px bg-white absolute bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ease-in duration-200'
                      : 'rotate-0 block w-[17px] h-px bg-white absolute bottom-5 left-[50%] translate-x-[-50%] translate-y-0 ease-in duration-200'
                  }
                ></span>
              </label>
              <span className='hidden'>Global Navigation</span>
            </button>
          </li>
          <li className='flex items-center justify-center h-full px-4 text-center lg:px-[9px]'>
            <a
              href='/'
              className="focus block w-[17px] h-full bg-[length:17px_48px] lg:bg-[length:15px_44px] bg-no-repeat bg-[url('https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_small.svg')]"
            >
              <span className='hidden'>Apple</span>
            </a>
          </li>
          <GlobalNav />
          <li className='max-[1023px]:visibility-hidden h-full px-[9px]'>
            <a
              href='/'
              className="focus block w-[15px] h-full bg-[length:15px_88px] bg-no-repeat bg-[url('https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg')]"
            >
              <span className='hidden'>Search</span>
            </a>
          </li>
          <li className='flex items-center justify-center h-full text-center px-4 lg:px-[9px]'>
            <a
              href='/'
              className={
                toggleSidebar
                  ? "translate-y-[10%] opacity-0 focus block w-[17px] h-full bg-[length:17px_48px] lg:bg-[length:15px_44px] bg-no-repeat bg-[url('https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_small.svg')] ease-in duration-200 transition-all"
                  : "translate-y-0 focus block w-[17px] h-full bg-[length:17px_48px] lg:bg-[length:15px_44px] bg-no-repeat bg-[url('https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_small.svg')] ease-in duration-200 transition-translate"
              }
            >
              <span className='hidden'>Shopping Bag</span>
            </a>
          </li>
        </ul>
      </nav>

      <Sidebar toggle={toggleSidebar} />
    </>
  );
}

export default Header;
