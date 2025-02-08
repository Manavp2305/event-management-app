import Mountain from '../../assets/ContactBackground.jpg'
import './HeroSection2.css'

function HeroSection2({title,subtitle1,subtitle2}){
  return (
    <div className='Container'>
      <img src={Mountain} alt="" className='Mount'/>
      <div className='text'>
        <h2>{title}</h2>
        <h1>{subtitle1} <span className='span1'>{subtitle2}</span></h1>
      </div>      
    </div>
  )
}

export default HeroSection2
