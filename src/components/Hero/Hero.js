import React from 'react';
import HeroHeader from './HeroHeader';
import HeroInformation from './HeroInformation';
import HeroIntroduction from './HeroIntroduction';

const Hero = () => {
  return (
    <>
      <HeroHeader />
      <HeroIntroduction />
      <HeroInformation />
    </>
  );
};

export default Hero;
