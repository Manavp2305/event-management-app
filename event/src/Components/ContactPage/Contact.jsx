import HeroSection2 from './HeroSection2'
import NavBar from '../HomePage/navbar'
import Contactform from './Contactform'
import Footer from '../HomePage/Footer'

function Contact() {
  return (
    <div>
      <NavBar />
      <HeroSection2 title='CONTACT US NOW' subtitle1='KEEP' subtitle2='IN TOUCH'/>
      <Contactform />
      <Footer />
    </div>
  )
}

export default Contact
