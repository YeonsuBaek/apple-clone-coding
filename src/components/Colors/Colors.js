import React, { useState } from 'react';

const Colors = () => {
  const [color, setColor] = useState('Deep Purple');

  const handleChangeColor = (choice) => {
    setColor(choice);
  };

  return (
    <div className='relative z-20 w-[87.5%] mx-auto my-2'>
      <h2 className='min-[0px]:visibility-hidden'>Colors</h2>
      <ul className='ml-[8.3%] mb-11 text-[19px] font-semibold'>
        <li className={color === 'Deep Purple' ? `text-[#cecece] mb-4` : `text-[#424245] mb-4`}>
          <button onClick={() => handleChangeColor('Deep Purple')}>Deep Purple</button>
        </li>
        <li className={color === 'Gold' ? `text-[#cecece] mb-4` : `text-[#424245] mb-4`}>
          <button onClick={() => handleChangeColor('Gold')}>Gold</button>
        </li>
        <li className={color === 'Silver' ? `text-[#cecece] mb-4` : `text-[#424245] mb-4`}>
          <button onClick={() => handleChangeColor('Silver')}>Silver</button>
        </li>
        <li className={color === 'Space Black' ? `text-[#cecece] mb-4` : `text-[#424245] mb-4`}>
          <button onClick={() => handleChangeColor('Space Black')}>Space Black</button>
        </li>
      </ul>
      <ul className='relative w-[242px] mx-auto my-0'>
        <li className='absolute top-0 left-0 z-0'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_deep_purple__du23dbfjl1km_small_2x.jpg'
            alt='Deep Purple'
            className={color === 'Deep Purple' ? `opacity-100 ease-in duration-200` : `opacity-0 ease-in duration-300`}
          />
        </li>
        <li className='absolute top-0 left-0 z-0'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_gold__e2kfk9zl5eie_small_2x.jpg'
            alt='Gold'
            className={color === 'Gold' ? `opacity-100 ease-in duration-200` : `opacity-0 ease-in duration-300`}
          />
        </li>
        <li className='absolute top-0 left-0 z-0'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_silver__eph35go3eiy6_small_2x.jpg'
            alt='Silver'
            className={color === 'Silver' ? `opacity-100 ease-in duration-200` : `opacity-0 ease-in duration-300`}
          />
        </li>
        <li className='absolute top-0 left-0 z-0'>
          <img
            src='https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_space_black__ev5ncqabz7ma_small_2x.jpg'
            alt='Space Black'
            className={color === 'Space Black' ? `opacity-100 ease-in duration-200` : `opacity-0 ease-in duration-300`}
          />
        </li>
      </ul>
    </div>
  );
};

export default Colors;
