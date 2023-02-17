import React, { useState } from 'react';
import ColorsDevice from './ColorsDevice';

const Colors = () => {
  const [color, setColor] = useState('Deep Purple');

  const handleChangeColor = (choice) => {
    setColor(choice);
  };

  return (
    <div className='relative z-20 w-[87.5%] mx-auto my-2'>
      <h2 className='min-[0px]:visibility-hidden'>Colors</h2>
      <div className='md:flex md:flex-row-reverse md:items-start md:justify-center md:mb-24 lg:mb-[72px]'>
        <ul className='ml-[8.3%] mb-11 text-[19px] font-semibold md:mx-0 lg:text-[21px] md:mt-60 lg:mt-80'>
          <li className={color === 'Deep Purple' ? `text-[#cecece] mb-4 lg:mb-5` : `text-[#424245] mb-4 lg:mb-5`}>
            <button onClick={() => handleChangeColor('Deep Purple')}>Deep Purple</button>
          </li>
          <li className={color === 'Gold' ? `text-[#cecece] mb-4 lg:mb-5` : `text-[#424245] mb-4 lg:mb-5`}>
            <button onClick={() => handleChangeColor('Gold')}>Gold</button>
          </li>
          <li className={color === 'Silver' ? `text-[#cecece] mb-4 lg:mb-5` : `text-[#424245] mb-4 lg:mb-5`}>
            <button onClick={() => handleChangeColor('Silver')}>Silver</button>
          </li>
          <li className={color === 'Space Black' ? `text-[#cecece] mb-4 lg:mb-5` : `text-[#424245] mb-4 lg:mb-5`}>
            <button onClick={() => handleChangeColor('Space Black')}>Space Black</button>
          </li>
        </ul>
        <ColorsDevice color={color} />
      </div>
    </div>
  );
};

export default Colors;
