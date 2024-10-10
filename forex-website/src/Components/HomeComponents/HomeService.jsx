import React from 'react'
import '../HomeComponents/HomeService.css'
import { IoIosArrowForward } from "react-icons/io";


 const customS =[{
        num: '01',
        title:'Customized Portfolio Management',
        param:'Our expert team will work closely with you to create a tailored investment strategy designed to achieve your financial goals while minimizing risk and managing your portfolio.'
    },{
      num:'02',
      title:'Algorithmic Trading Solutions',
      param:'Our algorithms leverage advanced technology to analyze market data in real-time, enabling us to identify lucrative trading opportunities and execute trades with precision.'
    },{
      num:'03',
      title:'24/7 Market Analysis and Support',
      param:'Our team of dedicated analysts monitors global markets around the clock, providing you with timely insights, recommendations, and support whenever you need it.'
    }]



function HomeService() {
  return (
    <div className='container HomeService'>
      <div>
        <h3>our services</h3>
        <h2>what we do</h2>
      </div>
      <div>
        {
             customS.map((data)=>{
              return(
                <>
                <div>
                  <h3>{data.num}</h3>
                  <h2>{data.title}</h2>
                  <p>{data.param}</p>            
                  <div>
                    <p>read more</p>
                    <span><IoIosArrowForward /></span>
                 </div>
                </div>
                </>
              )
             })
        }
      </div>

    </div>
  )
}

export default HomeService