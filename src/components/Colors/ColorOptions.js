import React from 'react';

const options = ['Deep Purple', 'Gold', 'Silver', 'Space Black'];

const ColorOptions = ({ color, setColor }) => {
  return (
    <ul className='ml-[8.3%] mb-11 text-[19px] font-semibold md:mx-0 lg:text-[21px] md:mt-60 lg:mt-80'>
      {options.map((option) => {
        return (
          <li key={option} className={color === option ? `text-[#cecece] mb-4 lg:mb-5` : `text-[#424245] mb-4 lg:mb-5`}>
            <button onClick={() => setColor(option)}>{option}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ColorOptions;
