import React from 'react'
import '../AboutComponents/AboutMission.css'
import chartBoard from '../../images/chartBoard.jpg'

function AboutMission() {
  return (
    <div className='container aboutMission'>
        <div>
            <h3>our mission</h3>
            <h1>Our mission is simple: to empower traders worldwide with the knowledge, tools, and support they need to thrive in the dynamic world of trading.</h1>
        </div>
        <div>
            <div>
                <h2>We believe in transparency, integrity, and a commitment to delivering results for our clients.</h2>
                <p>At Freelance Trader, our mission is straightforward yet impactful: to empower traders worldwide with the essential trifecta of knowledge, tools, and unwavering support, ensuring their success in the ever-evolving realm of trading. We are driven by a steadfast commitment to transparency, integrity, and delivering tangible results for our valued clients. Through our dedication to transparency, we aim to foster trust and openness, providing traders with the clarity they need to make informed decisions. With integrity at our core, we uphold the highest ethical standards in all our dealings, building enduring relationships based on honesty and respect.</p>
                <span>Above all, our mission is fueled by a relentless passion to see our clients thrive, armed with the resources and guidance necessary to navigate the dynamic landscape of trading with confidence and resilience.</span>
            </div>
            <div>
                <img src={chartBoard} alt="chartBoard-Forex" />
            </div>
        </div>
     
    </div>
  )
}

export default AboutMission