import React, { useState } from 'react'
import '../ContactComponents/ContactHome.css'
import emailjs from'@emailjs/browser';


import { SlSocialPintarest } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
// import { LuCopyright } from "react-icons/lu";


function ContactHome() {

   const [name,setName] =useState('');
   const [email,setEmail] = useState('');
   const [message,setMessage] = useState('')

   const handleSubmit=(e)=>{
    e.preventDefault();
    


    const serviceId='service_iicjuw5';
    const templateId='template_vkv4wyh';
    const publicKey ='Aq_1iyqK4MDR4viwa';


    const templateParams={
        from_name:name,
        from_email: email,
        to_name:'delyte',
        message:message,
    }

    emailjs.send(serviceId,templateId,templateParams,publicKey).
    then((response)=>{
        console.log('email sent successfully', response);
        alert('Thank you for your service')
        setName('');
        setEmail('');
        setMessage('');
    }).catch((error)=>{
        console.log('error sending email', error)
    })

    
   }
  return (
    <div className='container contactHome'>
        <div>
            <div>
            <h2>get in touch</h2>
            <p>Reach out today and let's start discussing your trading goals. Connect with us now to explore how we can elevate your trading experience.</p>
            </div>
            <div>
                <div>
                <h3>phone</h3>
                <p>(303) 555-0105</p>
                </div>
                <div>
                <h3>email</h3>
                <p>mail@example.com</p></div>
            </div>
            <div>
                <h3>address</h3>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            </div>
            <div>
                <h4>follow us:</h4>
                <span><SlSocialFacebook /></span>
                    <span><SlSocialYoutube /></span>
                    <span><SlSocialPintarest /></span>
                    <span><SlSocialInstagram /></span>
                    <span><TiSocialTwitter /></span>
            </div>
        </div>
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" required  value={name} onChange={(e)=>setName(e.target.value)}placeholder='name'/>
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
                <textarea placeholder='message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                <div>
                <button type='submit'>send</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default ContactHome