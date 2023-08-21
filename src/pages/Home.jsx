import React from 'react'
import Hero from '../components/Hero/Hero'
import Activity from '../components/Activity/Activity'
import DirectorMessage from '../components/DirectorMessage/DirectorMessage'

const Home = () => {
  return (
    <div>
      <Hero />
      <DirectorMessage />
      <Activity />
    </div>
  )
}

export default Home