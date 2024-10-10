import React from 'react'
import '../HomeComponents/HomeBlog.css'
import btc from '../../images/btc.jpg'
import lineChart from '../../images/line-chart.jpg'
import boyChart from '../../images/trading2.jpg'



    const arrCustom =[{
            img:btc,
            title:'Market Trends and Analysis',
            param:'Mastering Market Volatility: Strategies for Thriving in Turbulent Times'
        },{
            img:boyChart,
            title:'Risk Management Strategies',
            param:'The Art of Risk Management: Safeguarding Your Investments in a Volatile Market'
        },{
            img:lineChart,
            title:'Technical Analysis Insights',
            param:`'Demystifying Technical Analysis: A Beginner's Guide to Chart Patterns and Indicators'`
        }]


function HomeBlog() {
  return (
    <div className='container HomeBlog'>
        <div>
            <h3>blog</h3>
            <h2>Insights & Analysis</h2>
        </div>
        <div>
            {
                arrCustom.map((item)=>{
                    return(
                        <>
                        <div>
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.param}</p>
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

export default HomeBlog