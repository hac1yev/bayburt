import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import Mission from './components/mission/Mission';
import Siyaset from './components/companyec/Siyaset';


const App = () => {
  const mode = useSelector(state => state.modeReducer.mode);

  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
<<<<<<<<< Temporary merge branch 1
          <Route path='/history' element={<History />} />
=========
          <Route path='/mission' element={<Mission />} />
          <Route path='/economy' element={<Siyaset />} />
>>>>>>>>> Temporary merge branch 2
      </Routes>
      <Footer />
    </div>
  );
};

export default App;