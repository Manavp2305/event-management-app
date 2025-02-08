import React from 'react'
import './Herosection3.css'
import GalleryImages from './GalleryImages'
import IMG1 from '../../assets/Gallery1.jpg'
import IMG2 from '../../assets/Gallery2.jpeg'
import IMG3 from '../../assets/Gallery3.jpg'
import IMG4 from '../../assets/Gallery4.jpg'
import IMG5 from '../../assets/Gallery5.webp'
import IMG6 from '../../assets/Gallery6.jpg'

function Herosection3() {
  return (
    <div className='GContainer'>
      <div className='Upper'>
            <h3>OUR GALLERY</h3>
      </div>
    <GalleryImages image1={IMG1} image2={IMG2}/>
    <GalleryImages image1={IMG3} image2={IMG4}/>
    <GalleryImages image1={IMG5} image2={IMG6}/>
    <div className='Upper'>
            <h3>Your Location</h3>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4742607149137!2d72.82041647437228!3d22.598758479473098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1717392996115!5m2!1sen!2sin" width={1510} height={450} frameborder={0} style={{border:0}} allowfullscreen></iframe>

    <div className='offer'>
        <center className='off'>30% Off In June~July For Birthday Events</center>
        <button className='obtn'>Make an Event Now</button>
    </div>
    </div>
  )
}

export default Herosection3
