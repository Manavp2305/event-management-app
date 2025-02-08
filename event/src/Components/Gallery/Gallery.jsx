import React from 'react'
import NavBar from '../HomePage/navbar'
import Footer from '../HomePage/Footer'
import Herosection3 from './Herosection3'
import HeroSection2 from '../ContactPage/HeroSection2'

function Gallery(){
  return (
    <div>
      <NavBar />
      <HeroSection2 title='HARMONI EVENTS' subtitle1='HARMONI' subtitle2='GALLERY' />
      <Herosection3 />
      <Footer />
    </div>
  )
}

export default Gallery
