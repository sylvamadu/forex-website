import React from 'react'
import '../Hero/Hero.css'
import { IoIosArrowForward } from "react-icons/io";
import HomeBanner from '../../images/HomeBanner1.jpg'

function Hero() {
  return (
    <div className='container hero'>
        <div>
            {/* <img src={HomeBanner} alt="" /> */}
        </div>
        <div>
            <h3>Unlock your potential in trading with freelance trader</h3>
            <h1>Expert guidance and proven strategies to navigate financial markets successfully</h1>
        </div>
        <div>
          <div>
          <h3>learn more about our strategies</h3>
          <span>
          <IoIosArrowForward />
          </span>
         
          </div>
          
        </div>
        
    </div>
  )
}

export default Hero