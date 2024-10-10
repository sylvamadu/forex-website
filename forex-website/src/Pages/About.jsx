import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import HeroB from '../Components/Hero/HeroB'
import heroAbout from '../images/chartBoard2.jpg'
import Aboutabout from '../Components/AboutComponents/Aboutabout'
import AboutService from '../Components/AboutComponents/AboutService'
import AboutMission from '../Components/AboutComponents/AboutMission'
import Footer from '../Components/Footer/Footer'
import HomeNextLevel from '../Components/HomeComponents/HomeNextLevel'


function About() {
  return (
    <div>
      <Header />
      <HeroB
      title={"about us"}
      backgroundImg={heroAbout} 
      />
      <Aboutabout />
      <AboutService />
      <AboutMission />
      <HomeNextLevel />
      <Footer />
      
    </div>
  )
}

export default About