import React from 'react';

const ColorOptions = ({ color, setColor }) => {
  return (
    <ul className='ml-[8.3%] mb-11 text-[19px] font-semibold md:mx-0 lg:text-[21px] md:mt-60 lg:mt-80'>
      <li className={color === 'Deep Purple' ? `text-[#cecece] mb-4 lg:mb-5` : `text-[#424245] mb-4 lg:mb-5`}>
        <button onClick={() => setColor('Deep Purple')}>Deep Purple</button>
      </li>
      <li className={color === 'Gold' ? `text-[#cecece] mb-4 lg:mb-5` : `text-[#424245] mb-4 lg:mb-5`}>
        <button onClick={() => setColor('Gold')}>Gold</button>
      </li>
      <li className={color === 'Silver' ? `text-[#cecece] mb-4 lg:mb-5` : `text-[#424245] mb-4 lg:mb-5`}>
        <button onClick={() => setColor('Silver')}>Silver</button>
      </li>
      <li className={color === 'Space Black' ? `text-[#cecece] mb-4 lg:mb-5` : `text-[#424245] mb-4 lg:mb-5`}>
        <button onClick={() => setColor('Space Black')}>Space Black</button>
      </li>
    </ul>
  );
};

export default ColorOptions;
