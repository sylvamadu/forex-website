import React from 'react'
import '../HomeComponents/HomeAbout.css'
import bossMan from '../../images/boss-man.jpg'
import { IoIosArrowForward } from "react-icons/io";



// bossMan
function HomeAbout() {
  return (
    <div className='HomeAbout'>
        <div>
            <h3 className="title">about</h3>
            <h2 className="heading">At Freelance trader, we're dedicated to revolutionizing the way traders approach the financial markets.</h2>
            <p className="text">With years of experience and a passion for helping others succeed, Freelance trader leads our team of expert traders and analysts.</p>
            <div>
                <p>read more</p>
                <span><IoIosArrowForward /></span>
            </div>
        </div>
        <div>
            <img src={bossMan} 
            alt="boss Man" />
        </div>
    </div>
  )
}

export default HomeAbout