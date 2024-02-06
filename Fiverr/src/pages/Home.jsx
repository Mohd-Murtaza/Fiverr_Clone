import React from 'react'
import Navbar from '../component/Navbar'
import HomePageBanner from '../component/HomePageBanner'
import HomePageFeaturesCards from '../component/HomePageFeaturesCards'
import PopularServices from '../component/PopularServices'
import WaysToGet from '../component/waysToGet'
import HomePageVideo from '../component/HomePageVideo'
import HomePageBusinessSolution from '../component/HomePageBusinessSolution'
import HomePageMadeFiverr from '../component/HomePageMadeFiverr'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomePageBanner/>
      <HomePageFeaturesCards/>
      <PopularServices/>
      <WaysToGet/>
      <HomePageVideo/>
      <HomePageBusinessSolution/>
      <HomePageMadeFiverr/>
      <Footer/>
    </div>
  ) 
}

export default Home
