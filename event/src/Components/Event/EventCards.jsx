import React from 'react'
import './Herosection4.css'

function EventCards({image1,image2,image3,name1,name2,name3}){
  return (
    <div>
      <div className='evn-cont'>
        <div className='evn1'>
            <img src={image1} alt="" className='EV-IMG'/>
            <div className='event-name'>
                <h3>{name1}</h3>
            </div>
        </div>
        <div className='evn1'>
            <img src={image2} alt="" className='EV-IMG'/>
            <div className='event-name'>
                <h3>{name2}</h3>
            </div>
        </div>
        <div className='evn1'>
            <img src={image3} alt="" className='EV-IMG'/> 
            <div className='event-name'>
                <h3>{name3}</h3>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default EventCards
