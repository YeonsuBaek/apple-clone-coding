import React from 'react';

function GlobalNav(props) {
  return (
    <>
      {props.navList.map((item) => {
        return (
          <li className='max-[1023px]:visibility-hidden h-full px-2' key={Math.random()}>
            <a
              href={item.href}
              className="flex items-center justify-center h-full px-2 text-[12px] font-['SF_Pro_Text'] text-white focus"
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
