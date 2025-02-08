import './herosection.css'
import avtar1 from '../../assets/img_avatar1.png'
import avtar2 from '../../assets/img_avatar2.png'
import avtar3 from '../../assets/img_avatar3.png'

function HeroSection() {
    return (
        <div className='con'>
            <div className='text-block'>
                <p className="heading-1">One Stop Event Planner</p>
                <div className="content2">
                    <p id="para">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <p id="para">Event Should be perfect</p>
                    <div className="button">
                        <input type="text" placeholder=" Your Email Address" className='in' />
                        <button type="start" className="btn">Get Started</button>
                    </div>
                    <br />
                    <div className='viewsec'>
                        <img src={avtar1} alt="Avtar" className='avatar' />
                        <img src={avtar2} alt="Avtar" className='avatar' />
                        <img src={avtar1} alt="Avtar" className='avatar' />
                        <img src={avtar2} alt="Avtar" className='avatar' />
                        <img src={avtar1} alt="Avtar" className='avatar' />
                        <img src={avtar2} alt="Avtar" className='avatar' />
                        <img src={avtar3} alt="Avtar" className='avatar' />
                        <p id='views'>1600+ people requested to access a visit in 24 hours</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
