import React from 'react';
import HeroHeader from './components/Hero/HeroHeader';
import HeroIntroduction from './components/Hero/HeroIntroduction';
import Header from './components/Navigation/Header';
import LocalNav from './components/Navigation/LocalNav';

const App = () => {
  return (
    <>
      <Header />
      <LocalNav />
      <main>
        <HeroHeader />
        <HeroIntroduction />
      </main>
    </>
  );
};

export default App;
