import React from 'react';
import GlobalNav from './GlobalNav';
import Sidebar from './Sidebar';

function Header() {
  return (
    <>
      <nav className="w-full h-full bg-[#161617cc]/80 flex items-center justify-between lg:block lg:px-[22px]">
        <ul className="flex items-center justify-between w-full h-12 lg:max-w-screen-lg lg:h-11 lg:my-0 lg:mx-auto">
          <li className="flex items-center justify-center w-12 h-full text-center lg:visibility-hidden">
            <a href="/" className="w-full h-full focus display">
              <label className="relative block w-full h-full">
                <span className="block w-[17px] h-px bg-white absolute top-5 left-[50%] translate-x-[-50%]"></span>
                <span className="block w-[17px] h-px bg-white absolute bottom-5 left-[50%] translate-x-[-50%]"></span>
              </label>
              <span className="hidden">Global Navigation</span>
            </a>
          </li>
          <GlobalNav />
          <li className="flex items-center justify-center w-12 h-full text-center">
            <a
              href="/"
              className="focus block w-[17px] h-full bg-[length:17px_48px] lg:bg-[length:15px_44px] bg-no-repeat bg-[url('https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_small.svg')]"
            >
              <span className="hidden">Shopping Bag</span>
            </a>
          </li>
        </ul>
      </nav>

      <Sidebar />
    </>
  );
}

export default Header;
