import React from 'react';

const devices = [
  {
    color: 'Deep Purple',
    image:
      'https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_deep_purple__du23dbfjl1km_small_2x.jpg',
  },
  {
    color: 'Gold',
    image: 'https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_gold__e2kfk9zl5eie_small_2x.jpg',
  },
  {
    color: 'Silver',
    image: 'https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_silver__eph35go3eiy6_small_2x.jpg',
  },
  {
    color: 'Space Black',
    image:
      'https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_space_black__ev5ncqabz7ma_small_2x.jpg',
  },
];

const ColorsDevice = (props) => {
  return (
    <ul className='relative w-[242px] h-[598px] mx-auto my-0 md:w-[306px] md:h-[776px] md:mx-6 lg:w-[406px] lg:h-[1022px] lg:mx-12'>
      {devices.map((device) => {
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
