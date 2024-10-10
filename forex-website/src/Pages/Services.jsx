import React from 'react'
import Header from '../Components/Header/Header'
import HeroB from '../Components/Hero/HeroB'
import heroService from '../images/trading2.jpg'
import ServiceHome from '../Components/ServiceComponents/ServiceHome'
import Footer from '../Components/Footer/Footer'
import HomeNextLevel from '../Components/HomeComponents/HomeNextLevel'

function Services() {
  return (
    <div>
      <Header />
      <HeroB 
      title={'service'}
      backgroundImg={heroService}/>
      <ServiceHome />
      <HomeNextLevel />
      <Footer />
    </div>
  )
}

export default Services