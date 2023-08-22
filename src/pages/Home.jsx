import React from 'react'
import Hero from '../components/Hero/Hero'
import Activity from '../components/Activity/Activity'
import DirectorMessage from '../components/DirectorMessage/DirectorMessage'
import Histoyry from '../components/History/History'
import FirstSlider from '../components/firstSlider/FirstSlider'

const Home = () => {
  return (
    <div>
      <Hero />
      <FirstSlider />
      <DirectorMessage />
      <Activity />
      <Histoyry />
    </div>
  )
}

export default Home