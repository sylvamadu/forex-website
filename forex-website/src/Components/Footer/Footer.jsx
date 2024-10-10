import React from 'react'
import '../Footer/Footer.css'
import { SlSocialPintarest } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { LuCopyright } from "react-icons/lu";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container footer'>
        <div>
            <div>
                <h2>sign up to our newsletter</h2>
                <form >
                <input type="email"  placeholder='email address'/>
                <div>
                <button type='submit'>sign up</button>
                </div>
                
                </form>
            </div>
            <div>
                <div>
                    <ul>
                <Link to={"/"}> <li>Home</li></Link>
                <Link to={"/about"}> <li>About</li></Link>
                <Link to={"/service"}> <li>Services</li></Link>
                <Link to={"/blog"}> <li>Blog</li></Link>
                <Link to={"/contact"}> <li>Contact</li></Link>
                    </ul>
                </div>
                <div>
                    <span><SlSocialFacebook /></span>
                    <span><SlSocialYoutube /></span>
                    <span><SlSocialPintarest /></span>
                    <span><SlSocialInstagram /></span>
                    <span><TiSocialTwitter /></span>
                </div>
            </div>
        </div>
        <div>
            copyright <span><LuCopyright /></span> 2024 Freelance Trader
        </div>
    </div>
  )
}

export default Footer