import React from 'react'
import Header from '../Components/Header/Header'
import HeroB from '../Components/Hero/HeroB'
import heroContact from '../images/trading1.jpg'
import Footer from '../Components/Footer/Footer'
import ContactHome from '../Components/ContactComponents/ContactHome'

function Contact() {
  return (
    <div>
      <Header />
      <HeroB 
      title={'contact'}
      backgroundImg={heroContact}/>
      <ContactHome />
      <Footer />
    </div>
  )
}

export default Contact