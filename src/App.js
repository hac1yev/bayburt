import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import History from './pages/History/History';
import Mission from './pages/Mission/Mission';
import Siyaset from './pages/Politics/Siyaset';
import DirectorsBoard from './pages/DirectorBoards/DirectorsBoard';
import Projects from './pages/Projects/Projects';
import Certificat from './pages/Certificate/Certificat';
import Founder from './pages/Founder/Founder';

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
          <Route path='/about/directors-board' element={<DirectorsBoard />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about/certificat' element={<Certificat />} />
          <Route path='/about/founder' element={<Founder />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;