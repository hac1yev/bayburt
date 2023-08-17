import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  const mode = window.localStorage.getItem('mode')

  return (
    <div className=''>
      <Header />
      <Routes>

      </Routes>
      <Footer />
    </div>
  );
};

export default App;