import React from 'react'
import '../Hero/HeroB.css'

function HeroB({title , backgroundImg}) {
    const divStyle ={
        backgroundImage: `url(${backgroundImg})`,
    }
  return (
    <div className='container heroB' 
    style={divStyle} >
        <div>
            <h1>{title}</h1>
        </div>
        
    </div>
  )
}

export default HeroB