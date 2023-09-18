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
import Contact from './pages/Contact/Contact';
import Activity from './pages/Activity/Activity';
import ProjectDetail from './pages/Projects/ProjectDetail';
import HighwayProjects from './pages/Projects/HighwayProjects';
import SubwayProjects from './pages/Projects/SubwayProjects';
import DamPortProjects from './pages/Projects/DamPortProjects';
import AirportProjects from './pages/Projects/AirportProjects';
import SuperstructureProjects from './pages/Projects/SuperstructureProjects';
import RailwayProjects from './pages/Projects/RailwayProjects';
import Awards from './pages/Awards/Awards';
import Construction from './pages/Construction/Construction';

const App = () => {
  const mode = useSelector(state => state.modeReducer.mode);

  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      <Header />
      <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/about/history' element={<History />} />
          <Route path='/about/mission' element={<Mission />} />
          <Route path='/about/politics' element={<Siyaset />} />
          <Route path='/about/directors-board' element={<DirectorsBoard />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/highway' element={<HighwayProjects />} />
          <Route path='/projects/railway' element={<RailwayProjects />} />
          <Route path='/projects/subway' element={<SubwayProjects />} />
          <Route path='/projects/dam-port' element={<DamPortProjects />} />
          <Route path='/projects/airport' element={<AirportProjects />} />
          <Route path='/projects/superstructure' element={<SuperstructureProjects />} />
          <Route path='/projects/:projectId' element={<ProjectDetail />} />
          <Route path='/about/certificat' element={<Certificat />} />
          <Route path='/about/founder' element={<Founder />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/about/awards' element={<Awards />} />
          <Route path='/construction' element={<Construction />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;