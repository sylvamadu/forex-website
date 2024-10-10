import React from 'react'
import '../HomeComponents/HomeClient.css'
import { RiStarSFill } from "react-icons/ri";
import { ImQuotesRight } from "react-icons/im";


function HomeClient() {
  return (
    <div className='container HomeClient'>
        <div>
        <ImQuotesRight />
        </div>
        <div>
          <div>
            <span> <RiStarSFill /></span>
            <span> <RiStarSFill /></span>
            <span> <RiStarSFill /></span>
            <span> <RiStarSFill /></span>
            <span> <RiStarSFill /></span>
         
            
           </div>
            <p>
            "I've been relying on Freelance trader' portfolio management services for several years now, and I couldn't be happier with the results. Their team of experts took the time to understand my financial goals and risk tolerance, crafting a customized investment strategy that has consistently outperformed the market."
            </p>
            <h2>
            <h3>Mark reuben</h3>
            <h4>investor</h4>
            </h2>
          
        </div>
    </div>
  )
}

export default HomeClient