import React from 'react'
import './HeroSection2.css'

function Contactform() {
  return (
    <div>
      <div className='cont'>
        <p className='CP'>CONTACT US</p>
        <p className='para'>Keep In Touch <span className='span2'>With Harmoni</span></p>
        <input type="text" name="" id="" placeholder=' Your Name' className='inputcnt'/>
        <input type="email" name="" id="" placeholder=' Email Address' className='inputcnt' />
        <input type="text" name="" id="" placeholder=' Your Country' className='inputcnt' />
        <input type="moblie" name="" id="" placeholder=' Mobile Number' maxLength={10} className='inputcnt'/>
        <textarea name="" id="" rows={5} cols={135} placeholder=' Your Message'></textarea>
        <button className='btncontact'>Send Mail</button>
      </div>
    </div>
  )
}

export default Contactform
