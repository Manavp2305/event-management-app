import React from 'react'
import Nav from './Nav.jsx'
import tree from '../assets/tree.jpeg'
import lock from '../assets/lock.png'
import './Sign.css'
function sign() {
  return (
    <div>
        <Nav/>
        <div className='signsection'>
        <div className="img-cont">
        <img src={tree} alt="" />
        </div>
        <div className="cont">
          <img src={lock} alt="" />
          <p>Sign Up</p>
          <div className="inp">
            <input type="text" placeholder='Name*' />
            <input type="text" placeholder='Email*' />
            <div className="rad">
            <input type="radio" id="Female"  />
              <label htmlFor="Female">Female</label>
            <input type="radio" id="Male"  />
              <label htmlFor="Male">Male</label>
            <input type="radio" id="Other"  />
              <label htmlFor="Other">Other</label>
            </div>
            <input type="text" placeholder='Phone Number*' />
            <input type="text" placeholder='Password*' />
            <input type="text" placeholder='Confirm Password*' />
          </div>
          <button>Sign Up</button>
          <p>Already have an account ? Sign In</p>
        </div>
        </div>
        
    </div>
  )
}

export default sign