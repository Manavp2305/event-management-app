import React from 'react'
import Herosection2 from '../ContactPage/HeroSection2'
import NavBar from '../HomePage/navbar'
import Footer from '../HomePage/Footer'
import Herosection4 from './Herosection4'

function Event() {
  return (
    <div>
        <NavBar />
        <Herosection2 title='HARMONI' subtitle1='HARMONI' subtitle2='EVENTS' />
        <Herosection4 />
        <Footer />
    </div>
  )
}

export default Event
