import React, { useState } from 'react'
import '../Header/Header.css'
import { RiMenu2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import logo from '../../images/forex-logo.jpg';
import { Link } from 'react-router-dom';

function Header() {

     const [toggle,setToggle]=useState(false);
     const toggleNavbar=()=>{
          setToggle(!toggle);
     }   

  return (
  <div className='Header container' >
        <div>
            <div>
                <div className='logo'>
                <img src={logo} alt=""  />
                </div>
                <h2>Freelance trader</h2>
            </div>
            <div onClick={toggleNavbar}>
            <RiMenu2Line  className={
                toggle && toggle ? 'closeNav':'openNavbar'
            }
            />
            
            <GrClose className={
                toggle && toggle ? 'close':'closeNav'
            }   />
            </div>
        </div>
        <div className={toggle ? 'navOpen':'navClose'}>
            <ul> 
                <Link to={"/"}> <li>Home</li></Link>
                <Link to={"/about"}> <li>About</li></Link>
                <Link to={"/service"}> <li>Services</li></Link>
                <Link to={"/blog"}> <li>Blog</li></Link>
                <Link to={"/contact"}> <li>Contact</li></Link>
            </ul>
        </div>
        <div>
            <button>Request a consultation</button>
        </div>
        
 </div>
  )
}

export default Header