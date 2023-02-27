import React, { useState } from 'react';
import ColorOptions from './ColorOptions';
import ColorsDevice from './ColorsDevice';
import Description from './Description';
import Privacy from './Privacy';

const Colors = () => {
  const [color, setColor] = useState('Deep Purple');

  return (
    <div className='relative z-20 w-[87.5%] mx-auto my-2 pb-[86px] md:w-[692px] md:pb-[103px] lg:w-[980px] lg:pb-[135px]'>
      <h2 className='min-[0px]:visibility-hidden'>Colors</h2>
      <div className='mb-[39px] md:flex md:flex-row-reverse md:items-start md:justify-center md:mb-24 lg:mb-[72px]'>
        <ColorOptions setColor={setColor} color={color} />
        <ColorsDevice color={color} />
      </div>
      <Description />
      <Privacy />
    </div>
  );
};

export default Colors;
