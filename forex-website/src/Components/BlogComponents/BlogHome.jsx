import React from 'react'
import '../BlogComponents/BlogHome.css'
import btc from '../../images/btc.jpg'
import lineChart from '../../images/line-chart.jpg'
import boyChart from '../../images/trading2.jpg'
import {   useNavigate } from 'react-router-dom'





 const mappBlog =[{
           img:lineChart,
           title:'Technical Analysis Insights',
           heading:'Demystifying Technical Analysis: A Beginner’s Guide to Chart Patterns and Indicators',
           tradeDate:'Alex / April 1, 2024',
           params:"Demystifying Technical Analysis: A Beginner’s Guide to Chart Patterns and Indicators” offers an accessible entry point into the world of technical analysis, providing novice traders with the foundational knowledge needed to interpret charts and indicators effectively. This blog series breaks down complex concepts into simple, easy-to-understand terms, empowering beginners to make informed trading decisions based on technical analysis. From recognizing common chart patterns such as head and shoulders or triangles to understanding the significance of key indicators like moving averages and relative strength index (RSI), this guide equips traders with the essential tools for analyzing market trends and identifying potential entry and exit points.Through practical examples and step-by-step tutorials, this series demystifies technical analysis, giving beginners the confidence to incorporate these powerful tools into their trading strategies. Whether you’re looking to enhance your understanding of price action or gain insights into market sentiment, mastering technical analysis is a crucial step towards becoming a successful trader. By equipping yourself with the knowledge and skills outlined in this guide, you’ll be better prepared to navigate the complexities of the financial markets and embark on your trading journey with clarity and confidence.",
           param:'Demystifying Technical Analysis: A Beginner’s Guide to Chart Patterns and Indicators” offers an accessible entry point into the world of […]'
        },{
            img:boyChart,
            title:'Risk Management Strategies',
            heading:'The Art of Risk Management: Safeguarding Your Investments in a Volatile Market',
            tradeDate:'Alex / April 1, 2024',
            params:'In the ever-changing landscape of the financial markets, mastering the art of risk management is paramount to safeguarding your investments and ensuring long-term success. “The Art of Risk Management: Safeguarding Your Investments in a Volatile Market” is a comprehensive exploration of essential techniques and strategies designed to help traders navigate through the challenges of market volatility with confidence and resilience. From setting realistic risk-reward ratios to implementing stop-loss orders and diversifying your portfolio, this blog series provides invaluable insights into minimizing risk while maximizing returns.Through a deep dive into risk management principles and practical examples, this series equips traders with the tools they need to protect their capital and thrive in turbulent market conditions. Whether you’re a novice trader or an experienced investor, mastering risk management is key to maintaining stability and achieving sustainable growth in your portfolio. By adopting a disciplined approach to risk management, you can mitigate losses, preserve capital, and position yourself for success in even the most unpredictable of market environments.',
            param:'In the ever-changing landscape of the financial markets, mastering the art of risk management is paramount to safeguarding your investments'
        },{
            img:btc,
            title:'Market Trends and Analysis',
            heading:'Mastering Market Volatility: Strategies for Thriving in Turbulent Times',
            tradeDate:'Alex / April 1, 2024',
            params:'In today’s dynamic financial landscape, market volatility presents both challenges and opportunities for traders. “Mastering Market Volatility: Strategies for Thriving in Turbulent Times” delves into the essential tactics required to navigate through periods of uncertainty with confidence and success. From leveraging volatility to your advantage to implementing risk management strategies, this comprehensive guide equips traders with the tools and knowledge needed to thrive amidst market turbulence.This blog series explores a range of proven techniques for mastering market volatility, including analyzing historical data, identifying key support and resistance levels, and adapting trading strategies to changing market conditions. Whether you’re a seasoned trader or just starting out, these insights will empower you to harness the power of volatility and capitalize on opportunities that arise, ensuring you remain resilient and profitable in even the most turbulent of times.',
            param:'In today’s dynamic financial landscape, market volatility presents both challenges and opportunities for traders. “Mastering Market Volatility: Strategies for Thriving'
        }]


  function BlogHome() {

    const navigate =useNavigate();
    // function handleClick(){
    //     navigate('/blog/blog-details')
    // }
      

  return (
    <div className='container blogHome'>
        <div>
    
            {
                mappBlog.map((data)=>{
                    return(
                        <>
                        <div >
                            <div className='imageBlog'>
                                <img src={data.img} alt="" />
                            </div>
                            <div>
                                <h3>{data.title}</h3>
                                <h2>{data.heading}</h2>
                                <h4>{data.tradeDate}</h4>
                                <p>{data.param}</p>
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

export default BlogHome