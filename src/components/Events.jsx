import React from 'react'
import moun from '../assets/mountain.jpeg'
import Footer from './Footer'
import Party from '../assets/party.jpeg'
import Navratri from '../assets/navratri.jpeg'
import Standup from '../assets/standup.jpeg'
import Bday from '../assets/birthday.jpeg'
import Wedding from '../assets/wedding.jpeg'
import event6 from '../assets/event6.jpeg'
import event7 from '../assets/event7.jpg'
import event8 from '../assets/event8.jpeg'
import './Events.css'
export default function Events() {
  return (
    <div>
      <div className="first">
        <img className='imgcontainer' src={moun} alt="mountain" />
      </div>
      <div className="evimg">
        <div className='ev a'>
          <a href="/Event"><img src={Party} alt="" /></a>
          <p>Party</p>
        </div>
        <div className='ev a'>
          <a href="/Event"><img src={Navratri} alt="" /></a>
          <p>Navratri</p>
        </div>
        <div className='ev a'>
        <a href="/Event"><img src={Standup} alt="" /></a>
          <p>Standup Comedy</p>
        </div>
        <div className='ev'>
        <a href="/Event"><img src={Bday} alt="" /></a>
          <p>Birthday</p>
        </div>
        <div className='ev'>
        <a href="/Event"><img src={Wedding} alt="" /></a>
          <p>Wedding</p>
        </div>
        <div className='ev'>
        <a href="/Event"><img src={event6} alt="" /></a>
          <p>DJ Night</p>
        </div>
        <div className='ev'>
        <a href="/Event"><img src={event7} alt="" /></a>
          <p>Concert</p>
        </div>
        <div className='ev'>
        <a href="/Event"><img src={event8} alt="" /></a>
          <p>Religious Events</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
