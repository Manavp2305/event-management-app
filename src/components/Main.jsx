import bcg from '../assets/background.jpeg';
import th from '../assets/th.jpeg';
import im2 from '../assets/im2.jpeg';
import im3 from '../assets/im3.jpeg';
import im4 from '../assets/im4.jpeg';
import im5 from '../assets/im5.jpeg';
import './Main.css';

function Main() {
  return (
    <div>
      <div className='main'>
        <div className="jp">
          <img className="bcgimg" src={bcg} alt="background image" />
          <div className="text-area">
            <h2>One Stop Event <br />Planner</h2>
            <div className="p">
              <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing
                Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow
                asked of</p>
              <p><br />Every Event should be perfect <br /></p>
              <div className='Mail'>
                <input className="email" type="email" placeholder="Your Email Address" />
                <button className="get_started">Get Started</button>
              </div>
            </div>
            <div className="people">
              <img src={th} alt="image1" />
              <img src={im2} alt="image1" />
              <img src={im3} alt="image1" />
              <img src={im4} alt="image1" />
              <img src={im5} alt="image1" />
              <p>1600 people requested to access a visit in 24 hours</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="heronav">
          <p>Google</p>
          <p>Slack</p>
          <p>Atlassian</p>
          <p>DropBox</p>
          <p>Shopify</p>
        </div>
        <div className="heromain">
          <div className="up">
            <h3>What is Harmoni event</h3>
            <p>We so opinion me message as delight.Whole front do of Plate heard oh ought, His defective nor convinced recidence own.Connection has put impossile own apartments boisterous.At jointure ladyship an insisted so humanity he.Friendly bechlour entrance to on by. </p>
          </div>
          <div className="heroman">
            <h3>Your Event will be beyond your imagination</h3>
            <p>Explore the library</p>
          </div>
          <div className="herofoot">
            <div className="hf">
              <h3>Chatbots</h3>
              <p>We so opinion friend me msj as delight. Whole front
                do of plate heard oh ought.
              </p>
            </div>
            <div className="hf">
              <h3>knowledgebase</h3>
              <p>At jointure ladyship an insisted so humanity his friendly behaviour
                entrance to on by. As put impossible on apartments.
              </p>
            </div>
            <div className="hf">
              <h3>Education</h3>
              <p>At jointure ladyship an insisted so humanity his friendly behaviour
                entrance to on by. As put impossible on apartments.</p>
            </div>
          </div>
        </div>
        <div className="mainlast">
          <div className="ml1">
            <h3>Harmony Event Management firm and wedding planner is a group of creative
            minds who would like to make weddings, birthday, & any kind of events courteous &
            a better place for our clients to celebrate important moment of their lives.
            </h3>
            <p>Request Early Access to get started</p>
          </div>
          <div className="ml2">
            <ul>
              <li>Photography</li>
              <li>Cinematography or videography service</li>
              <li>Full Venue Decoration service</li>
              <li>Home Decoration</li>
            </ul>
          </div>
          <div className="ml3">
            <p>A team of 3 talented Photographers are ready to snap the 
              best moments of your ceremony
            </p>
            <p>Creative Full HD 1080p Video, a different space of your ceremony/</p>
            <p>A blend of out-of-box ideas to decore your precious date.</p>
            <p>Just call us and get total event solution under one roof</p>
          </div>
        </div>
        <div className="pink">
          <p className='pi1'>Request early Access to get Started</p>
          <p className='pi2'>Register Today & start exploring the endless opportunities.</p>
          <button className='pi3'>Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
