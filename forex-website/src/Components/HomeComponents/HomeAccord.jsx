import React from 'react'
import '../HomeComponents/HomeAccord.css'
// import 'react-accessible-accordion/dist/fancy-example.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

     const accordion =[
        {
            id:'a',
            heading:'What types of trading education programs do you offer?',
            param:'At Freelance trader, we pride ourselves on offering a diverse range of trading education programs designed to cater to traders at every skill level. Our comprehensive curriculum includes beginner-friendly courses covering the fundamentals of trading, intermediate-level programs focusing on advanced trading strategies, and specialized workshops delving into specific areas such as technical analysis, risk management, and algorithmic trading. Additionally, we provide personalized one-on-one mentoring sessions for those seeking individualized guidance and support. With our commitment to providing high-quality education and practical insights, our programs are designed to empower traders with the knowledge and skills needed to succeed in the dynamic world of trading.'
        },
        {
            heading :'How do your portfolio management services work?',
            param:'At Freelance trader, our portfolio management services are tailored to meet the unique needs and objectives of each client. We begin by conducting a thorough assessment of your financial goals, risk tolerance, and investment preferences. Based on this evaluation, our team of experienced portfolio managers develops a customized investment strategy designed to optimize returns while mitigating risk. We continuously monitor market conditions and make strategic adjustments to your portfolio as needed, ensuring it remains aligned with your goals and responsive to changing market dynamics. With our transparent and proactive approach to portfolio management, you can rest assured that your investments are in capable hands, allowing you to focus on your other priorities with confidence.'
        },{
            heading:'How can I access your 24/7 market analysis and support?',
            param:'At Freelancing trader, accessing our 24/7 market analysis and support is simple and convenient. As a client, you’ll have access to our online platform where you can stay updated on the latest market trends, receive timely insights, and access our team of dedicated analysts whenever you need assistance. Additionally, we offer multiple channels of communication including email, phone, and live chat support, ensuring that help is always just a message or call away. Whether you have questions about market developments, need guidance on a specific trade, or require support during volatile times, our team is here to provide the expertise and assistance you need around the clock. With our commitment to providing comprehensive support and timely insights, you can trade with confidence knowing that you have a trusted partner by your side every step of the way.'
        },{
            heading:'What sets your algorithmic trading solutions apart?',
            param:'Our algorithmic trading solutions at David Williams are distinguished by their cutting-edge technology and proven track record of success. Unlike traditional manual trading methods, our algorithms leverage advanced machine learning and artificial intelligence techniques to analyze vast amounts of market data in real-time. This allows us to identify lucrative trading opportunities with precision and efficiency, executing trades at optimal prices and speeds. Furthermore, our algorithms are continuously refined and optimized to adapt to changing market conditions, ensuring consistent performance and staying ahead of the curve. With our commitment to innovation and excellence, our algorithmic trading solutions provide traders with a competitive edge in the fast-paced world of finance, empowering them to capitalize on market opportunities and achieve their investment goals.'
        }
     ]




function HomeAccord() {
  return (
    <div className='container HomeAccord'>
       <div>
        <h1>f.a.q</h1>
        <p>Find answers to commonly asked questions about our services and trading strategies</p>
       </div>
       <div>
       <Accordion  preExpanded={['a']}  allowZeroExpanded className='accordion'>
        {
            accordion.map((data)=>{
                return(
                    <>
                     <AccordionItem uuid={data.id} className='accordionItem'>
                <AccordionItemHeading className='accordionHeading'
                >
                    <AccordionItemButton className='accordionButton'>
                        {data.heading}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordionPanel'>
                    <p>
                    {data.param}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
                    </>
                )
            })
        } 
            </Accordion>
       </div>
    </div>
  )
}

export default HomeAccord