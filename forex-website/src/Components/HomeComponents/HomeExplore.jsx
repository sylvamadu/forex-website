import React from 'react'
import '../HomeComponents/HomeExplore.css'
import { IoIosArrowForward } from "react-icons/io";

function HomeExplore() {
  return (
    <div className='container HomeExplore'>
        <div>
            <h3>Ready to Elevate Your Trading Game?</h3>
            <h2>Explore Our Range of Tailored Services and Take the First Step Towards Financial Freedom Today!</h2>
        </div>
        <div>
            <div>
                <p>get started</p>
                <span><IoIosArrowForward /></span>
            </div>
        </div>

    </div>
  )
}

export default HomeExplore