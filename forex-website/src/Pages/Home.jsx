import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import HomeAbout from '../Components/HomeComponents/HomeAbout'
// import HomeAbut from '../Components/HomeComponents/HomeAbut'
import HomeService from '../Components/HomeComponents/HomeService'
import HomeBlog from '../Components/HomeComponents/HomeBlog'
import HomeExplore from '../Components/HomeComponents/HomeExplore'
import HomeClient from '../Components/HomeComponents/HomeClient'
import HomeAccord from '../Components/HomeComponents/HomeAccord'
import HomeNextLevel from '../Components/HomeComponents/HomeNextLevel'
import Footer from '../Components/Footer/Footer'
import BackToTop from '../Components/BackToTop/BackToTop'

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HomeAbout />
      <HomeService />
      <HomeBlog />
      <HomeExplore />
      <HomeClient />
      <HomeAccord />
      <HomeNextLevel />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Home