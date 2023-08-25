import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import History from './pages/History/History';

const App = () => {
  const mode = useSelector(state => state.modeReducer.mode);

  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;