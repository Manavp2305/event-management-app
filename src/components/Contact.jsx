import React from 'react'
import moun from '../assets/mountain.jpeg'
import tree from '../assets/tree.jpeg';

import lock from '../assets/lock.png'
import './Contact.css'
import Footer from './Footer'
export default function Contact() {
  return (
    <div>
      <div className="first">
            <img className='imgcontainer' src={moun} alt="mountain-image" />
            <div className="text">
                <h3 className='all'>C O N T A C T  &nbsp;  U S  &nbsp;   N O W</h3> 
                <h3 className='aa'><span className='ab'>KEEP</span> &nbsp; <span className='har'>IN TOUCH</span></h3>
                <p className='bc'>Home &nbsp;|&nbsp; Contact us</p>
            </div>
      </div>
      <div className="middl" id='contact'>
        <img src={tree} alt="" />
        <div className="cont">
          <img src={lock} alt="" />
          <p>Contact Us</p>
          <div className="inp">
            <input type="text" placeholder='Name*' name='text' />
            <input type="text" placeholder='Email*' name='email' />
            <input type="text" placeholder='Country*' name='country'/>
            <input type="tel" placeholder='Phone Number*' name='contact' />
            <input type="password" placeholder='Password*' name='password' />
          </div>
          <button>Send</button>
        </div>
        <div></div>
      </div>
      <div className="location">
        <p>Your Location</p>
        <iframe src="https://www.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Akshat+Tower+ahmedabad+(My+Business+Name)&amp;t&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" title='Location'></iframe>
      </div>
      <Footer/>
    </div>
  )
}
