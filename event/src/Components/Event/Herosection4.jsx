import React from 'react'
import './Herosection4.css'
import EventCards from './EventCards'
import Event_IMG1 from '../../assets/Event-image1.jpg'
import Event_IMG2 from '../../assets/Event-image2.avif'
import Event_IMG3 from '../../assets/Event-image3.jpeg'
import Event_IMG4 from '../../assets/Event-image4.jpeg'
import Event_IMG5 from '../../assets/Event-image5.jpeg'
import Event_IMG6 from '../../assets/Event-image6.jpg'
import Event_IMG7 from '../../assets/Event-image7.jpeg'

function Herosection4() {
    return (
        <div>
            <div className='Event-Container'>
                <EventCards image1={Event_IMG1} name1={'PARTY'} image2={Event_IMG2} name2={'NAVRATRI'} image3={Event_IMG3} name3={'STANDUP COMEDY'} />
                <EventCards image1={Event_IMG4} name1={'CONCERT'} image2={Event_IMG5} name2={'MARRIAGE'} image3={Event_IMG6} name3={'BIRTHDAY PARTY'} />
            </div>
            <div className='lan-event'>
                <img src={Event_IMG7} className='person-img' />
                <div className='info1'>
                    <p className='title'>Motivational Seminar</p>
                    <button className='info-btn'>Book</button>
                </div>
                <p className='info-para1'>abc | English | 12Yrs+ | 15:30-18:30</p>
                <hr />
                <p className='info-para1'>2024-06-03 - 2024-06-12 Surat | Rs200 onwards</p>
            </div>
        </div>
    )
}

export default Herosection4
