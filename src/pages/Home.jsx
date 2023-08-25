import React from 'react'
import Hero from '../components/Hero/Hero'
import Activity from '../components/Activity/Activity'
import DirectorMessage from '../components/DirectorMessage/DirectorMessage'
import Histoyry from '../components/History/History'
import PartnerCity from '../components/PartnerCity/PartnerCity'
import FirstSlider from '../components/firstSlider/FirstSlider'
import Projects from '../components/Projects/Projects'
import FooterSlider from '../components/FooterSlider/FooterSlider'
import FooterContent from '../components/Footer/FooterContent'

const Home = () => {
  return (
    <div>
      <Hero />
      <FirstSlider />
      <DirectorMessage />
      <Activity />
      <Histoyry />
      <PartnerCity />
      <Projects />
      <FooterSlider />
      <FooterContent />
    </div>
  )
}

export default Home