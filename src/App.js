import React from 'react';
import HeroHeader from './components/Hero/HeroHeader';
import Header from './components/Navigation/Header';
import LocalNav from './components/Navigation/LocalNav';

const App = () => {
  return (
    <>
      <Header />
      <LocalNav />
      <main>
        <HeroHeader />
      </main>
    </>
  );
};

export default App;
