import React from 'react';
import GlobalNavList from './GlobalNavList';

function GlobalNav() {
  return (
    <>
      {GlobalNavList.map((item) => {
        return (
          <li className='max-[1023px]:visibility-hidden h-full' key={Math.random()}>
            <a
              href={item.href}
              className='flex items-center justify-center h-full px-[9px] text-[12px] text-white focus'
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </>
  );
}

export default GlobalNav;
