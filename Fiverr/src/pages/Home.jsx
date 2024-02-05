import React from 'react'
import Navbar from '../component/Navbar'
import HomePageBanner from '../component/HomePageBanner'
import HomePageFeaturesCards from '../component/HomePageFeaturesCards'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomePageBanner/>
      <HomePageFeaturesCards/>
    </div>
  ) 
}

export default Home
