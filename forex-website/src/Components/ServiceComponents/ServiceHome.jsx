import React from 'react'
import '../ServiceComponents/ServiceHome.css'
import customizedPortfolio from '../../images/Customized-port.jpg'
import tradingSolution from '../../images/trading-solution.jpg'
import tradingAnalysis from '../../images/trading-analysis.jpg'
import educationTrade from '../../images/portfolio-management.jpg'


function ServiceHome() {
  return (
    <div className='container serviceHome'>
        <div>
            <div>
                <div>
                    <img src={customizedPortfolio} alt="" />
                </div>
                <div>
                    <h3>01</h3>
                    <h2>Customized Portfolio Management</h2>
                    <p>With a team of seasoned experts by your side, we'll delve deep into your financial aspirations, crafting a bespoke investment strategy meticulously tailored to your unique goals and risk tolerance. By leveraging our expertise and insights, we'll navigate the intricacies of the market landscape, ensuring your portfolio remains aligned with your objectives while effectively mitigating risk. With our personalized approach, rest assured that your financial future is in capable hands, allowing you to pursue your dreams with confidence and peace of mind.</p>
                </div>
            </div>
            <div className='even'>
                <div>
                  <img src={tradingSolution} alt="" />
                </div>
                <div>
                    <h3>02</h3>
                    <h2>Algorithmic Trading Solutions</h2>
                    <p>Step into the future of trading with our advanced algorithmic trading solutions, where the marriage of technology and expertise opens doors to unprecedented possibilities. Our state-of-the-art algorithms are at the forefront of innovation, continuously scanning market data in real-time to uncover lucrative trading prospects. With unparalleled precision and lightning-fast execution, our algorithms capitalize on fleeting market movements, ensuring you never miss out on valuable opportunities. Harnessing the power of technology, we provide you with a competitive edge in the ever-evolving financial landscape, empowering you to navigate markets.</p>
                </div>
            </div>
            <div>
                <div>
                <img src={tradingAnalysis} alt="" /> 
                </div>
                <div>
                    <h3>03</h3>
                    <h2>24/7 Market Analysis and Support</h2>
                    <p>From tracking market trends to identifying emerging opportunities, we provide you with timely insights and actionable recommendations to navigate the ever-changing landscape of finance with confidence. Whether you're seeking guidance on a specific trade or simply need reassurance during volatile times, our dedicated support team is always on standby, ready to provide the assistance and expertise you need, exactly when you need it. With our unwavering commitment to your success, you can trade with peace of mind, knowing you have a trusted partner by your side every step of the way.

</p>
                </div>
            </div>
            <div className='even'>
                <div>
                <img src={educationTrade} alt="" />
                </div>
                <div>
                    <h3>04</h3>
                    <h2>Trading Education Programs</h2>
                    <p>Unlock your potential in trading with our personalized trading education programs. From foundational principles to advanced strategies, we offer comprehensive courses tailored to suit traders at every level. Our expert instructors provide hands-on guidance and practical insights, empowering you to develop the skills and knowledge needed to navigate the complexities of the financial markets with confidence. Whether you're new to trading or seeking to refine your existing skills, our personalized approach ensures that you receive the support and guidance you need to succeed. With our commitment to your growth and success, you'll gain the confidence to make informed decisions and achieve your trading goals.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceHome