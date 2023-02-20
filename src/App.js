import React from 'react';
import Colors from './components/Colors/Colors';
import Hero from './components/Hero/Hero';
import Header from './components/Navigation/Header';
import LocalNav from './components/Navigation/LocalNav';

const App = () => {
  return (
    <div className='relative'>
      <Header />
      <LocalNav />
      <main>
        <Hero />
        <Colors />
      </main>
    </div>
  );
};

export default App;
