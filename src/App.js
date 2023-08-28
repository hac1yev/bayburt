import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import Siyaset from './pages/Politics/Siyaset';
import History from './pages/History/History';
import Mission from './pages/Mission/Mission';

const App = () => {
  const mode = useSelector(state => state.modeReducer.mode);

  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/history' element={<History />} />
          <Route path='/about/mission' element={<Mission />} />
          <Route path='/about/politics' element={<Siyaset />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;