import harmoni from '../../assets/harmoni.png'
import './About.css'
import Foot from '../HomePage/Footer'
import NavBar from '../HomePage/navbar'
import HeroSection2 from '../ContactPage/HeroSection2'


function About() {
  return (
    <div>
      <NavBar />
      <HeroSection2 title='ALL YOU NEED TO KNOW' subtitle1='ABOUT' subtitle2='HARMONI'/>
        <div className="M">
          
        <div className="Middle">
            <div className="left">
                <p className='wah'>we are harmoni</p>
                <h3>No.1 Events <br />Management</h3>
                <p>Get started!</p>
            </div>
            <div className="mid">
              <h3><b>Our Mission</b></h3>
              <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit ab culpa.
                 Ex, explicabo vero quos suscipit ipsa neque consequatur, beatae culpa totam, aliquam 
                 perferendis autem repudiandae voluptatum mollitia ducimus.</i></p>
              <p className="la"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Recusandae ratione nemo pariatur sint quo voluptates cumque maxime aperiam modi at.</b></p>
            </div>
            <div className="right">
              <h3><b>Our Vision</b></h3>
              <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit ab culpa.
                 Ex, explicabo vero quos suscipit ipsa neque consequatur, beatae culpa totam, aliquam 
                 perferendis autem repudiandae voluptatum mollitia ducimus.</i></p>
              <p className="lab"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Recusandae ratione nemo pariatur sint quo voluptates cumque maxime aperiam modi at.</b></p>
               </div>  
        </div>
        <div className="extend">
              <div className="halfone">
                <img src={harmoni} alt="" />
              </div>
              <div className="halftwo">
                <h3>Our Winning Awards</h3>
                <ul>
                  <li><p className='htl'><span>AUG 2015</span> 1<sup>st</sup> Place for Unique events</p></li>
                  <li><p className='htl'><span>MAY 2014</span> 1<sup>st</sup> Winner Best New Year events</p></li>
                  <li><p className='htl'><span>DEC 2013</span> 1<sup>st</sup> Place International Events Awards</p></li>
                </ul>
              </div>
        </div>
        <div className="caard">
          <div className="ca">
            <h3> Study With Us</h3>
            <p>Visit Our World class facility for South African Scientist and Spectrum.</p>
          </div>
          <div className="ca">
            <h3> Study With Us</h3>
            <p>Visit Our World class facility for South African Scientist and Spectrum.</p>
          </div>
          <div className="ca">
            <h3> Study With Us</h3>
            <p>Visit Our World class facility for South African Scientist and Spectrum.</p>
          </div>
          <div className="ca">
            <h3> Study With Us</h3>
            <p>Visit Our World class facility for South African Scientist and Spectrum.</p>
          </div>
          <div className="ca">
            <h3> Study With Us</h3>
            <p>Visit Our World class facility for South African Scientist and Spectrum.</p>
          </div>
          <div className="ca">
            <h3> Study With Us</h3>
            <p>Visit Our World class facility for South African Scientist and Spectrum.</p>
          </div>
          <div className="ca">
            <h3> Study With Us</h3>
            <p>Visit Our World class facility for South African Scientist and Spectrum.</p>
          </div>
          <div className="ca">
            <h3> Study With Us</h3>
            <p>Visit Our World class facility for South African Scientist and Spectrum.</p>
          </div>
        </div>
        </div>
         <Foot/>
    </div>
  )
}

export default About