import React from 'react';

function Sidebar() {
  return (
    <aside className="absolute left-0 w-screen h-auto bg-black top-12">
      <div className="px-2.5 h-[53px] w-full flex items-start justify-center border-b border-[#424245]">
        <form className="relative mx-auto my-0 w-full max-w-[584px]">
          <button className="focus absolute top-0 left-0 w-[30px] h-9 bg-no-repeat bg-left-[8px] bg-center bg-[url('https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_small.svg')]"></button>
          <input
            type="text"
            placeholder="Search apple.com"
            className="pl-[30px] rounded-lg w-full block h-9 bg-[#1d1d1f] outline-0 text-[17px] placeholder:font-['SF_Pro_Text'] leading-[1.23536] tracking-[0.022em] placeholder:text-[#6e6e73]"
          />
        </form>
      </div>
    </aside>
  );
}

export default Sidebar;
