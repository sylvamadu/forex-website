import React, { useState, useEffect }  from 'react'
import '../BackToTop/BackToTop.css'
import { IoIosArrowDropup } from "react-icons/io";

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    

  return (

      <>
      {isVisible && (
        <button onClick={scrollToTop}
        className='buttonStyle'
        //  style={buttonStyle}
         >
          <IoIosArrowDropup />
        </button>
      )}
    </>
  )
};


export default BackToTop