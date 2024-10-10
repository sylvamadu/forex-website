import React from 'react'
import Header from '../Components/Header/Header'
import HeroB from '../Components/Hero/HeroB'
import heroBlog from '../images/chartBoard.jpg'
import BlogHome from '../Components/BlogComponents/BlogHome'
import Footer from '../Components/Footer/Footer'





function Blog() {
  return (
    <div>
      <Header />
      <HeroB 
       title={"blog"}
       backgroundImg={heroBlog}
      />
      <BlogHome />
      <Footer />
    </div>
  )
}

export default Blog