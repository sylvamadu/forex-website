import React from 'react'
import '../BlogComponents/BlogDetails.css'
import Header from '../Header/Header'
import HeroB from '../Hero/HeroB'
import heroBlog from '../../images/HomeBanner.jpg'


function BlogDetails() {
  return (
    <>
     <div >
  <Header />
  <HeroB 
    title={'blog-details'}
    backgroundImg={heroBlog}/>
    </div>
    <div>
        
    </div>
    </>
   
  )
}

export default BlogDetails