import React from 'react'
import'../HomeComponents/HomeNextLevel.css'
import phoneTrade from '../../images/phoneTrade.jpg'
import { IoIosArrowForward } from "react-icons/io";



function HomeNextLevel() {
  return (
    <div className='container HomeNextLevel'>
        <div>
            <h1>Ready to Take Your Trading to the Next Level?</h1>
            <p>
            Don't Wait Any Longer to Unleash Your Trading Potential – Get Started Today and Let Us Guide You Towards Success.</p>
            <div>
                    <h2>get started</h2>
                    <span><IoIosArrowForward /></span>
            </div>
        </div>
        <div>
            <img src={phoneTrade} alt="phonetrade" />
        </div>

    </div>
  )
}

export default HomeNextLevel