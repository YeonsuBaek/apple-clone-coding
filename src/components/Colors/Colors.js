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
      <ColorsDevice color={color} />
    </div>
  );
};

export default Colors;
