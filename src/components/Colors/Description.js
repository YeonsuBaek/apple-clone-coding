import React, { useState, useEffect, useRef } from 'react';

const ColorsPrivacy = () => {
  const [positionY, setPositionY] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', scrollY);
    return () => {
      window.removeEventListener('scroll', scrollY);
    };
  }, []);

  const scrollY = () => {
    const scroll = scrollRef.current.getBoundingClientRect();
    setPositionY(scroll.top);
  };

  const positionMin = 480;
  const positionMax = 800;
  const heightOf100Percent = positionMax - positionMin;
  let opacityValue;

  if (positionY <= positionMin) {
    opacityValue = 100;
  } else if (positionY >= positionMax) {
    opacityValue = 0;
  } else {
    const opacity = 100 - parseInt(((positionY - positionMin) / heightOf100Percent) * 100, 10);
    opacityValue = opacity < 100 ? opacity : 100;
  }

  return (
    <div
      ref={scrollRef}
      style={{ opacity: opacityValue + '%' }}
      className={`max-w-[83.333%] ml-[8.333%] mr-auto pb-[86px] text-[21px] font-semibold leading-[1.125] tracking-[0.231px] md:max-w-[50%] md:mx-auto md:pb-[103px] lg:pb-[135px] lg:text-[32px]`}
    >
      <p className='mb-4 md:mb-6'>Designed for durability.</p>
      <p>
        With Ceramic Shield, tougher than any smartphone glass. Water resistance.1 Surgical-grade stainless steel. 6.1″
        and 6.7″ display sizes.2 All in four Pro colors.
      </p>
    </div>
  );
};

export default ColorsPrivacy;
