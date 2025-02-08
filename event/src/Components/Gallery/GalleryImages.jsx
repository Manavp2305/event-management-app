import React from 'react'
import './Herosection3.css'

function GalleryImages({image1,image2}) {
  return (
    <div className='Lower'>
        <div className='GImage1'>
            <img src={image1} alt="" className='GIMG'/>
            <div className='desc'>
                <h3>Hello</h3>
                <h5>Hello</h5>
            </div>
        </div>
        <div className='GImage2'>
            <img src={image2} alt="" className='GIMG'/>
            <div className='desc'>
                <h3>Hello</h3>
                <h5>Hello</h5>
            </div>
        </div>
        
      </div>
  )
}

export default GalleryImages
