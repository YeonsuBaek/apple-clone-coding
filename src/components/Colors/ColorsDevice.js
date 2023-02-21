import React from 'react';
import DeviceList from './DeviceList';

const ColorsDevice = (props) => {
  return (
    <ul className='relative w-[242px] h-[598px] mx-auto my-0 md:w-[306px] md:h-[776px] md:mx-6 lg:w-[406px] lg:h-[1022px] lg:mx-12'>
      {DeviceList.map((device) => {
        return (
          <li className='absolute top-0 left-0 z-0' key={device.color}>
            <img
              src={device.image}
              alt={device.color}
              className={
                props.color === device.color ? `opacity-100 ease-in duration-200` : `opacity-0 ease-in duration-300`
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ColorsDevice;
