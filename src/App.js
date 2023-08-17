import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

const App = () => {
  const mode = window.localStorage.getItem('mode')

  return (
    <div className=''>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;