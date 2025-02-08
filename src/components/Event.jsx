import React from 'react';
import moun from '../assets/mountain.jpeg';
import standman from '../assets/standman1.jpeg'
import './Event.css'
export default function Event() {
  return (
    <div>
        <div className="first">
            <img className='imgcontainer' src={moun} alt="mountain" />
            <div className="text">
                <h3 className='all'>A L L &nbsp;  Y O U &nbsp;   N E E D &nbsp;  T O &nbsp;  K N O W </h3> 
                <h3 className='aa'><span className='ab'>ABOUT </span> &nbsp; <span className='har'>HARMONI</span></h3>
                <p className='bc'>Home &nbsp;|&nbsp; About us</p>
            </div>
        </div>
        <div className="eve">
        <div className="eventname">
            <div className="eventimage">
                <img src={standman} alt="" />
            </div>
            <div className="evdate">
                <p>10-06-2024</p>
            </div>
            <div className="evdetails">
                <h3>Sandeep Maheshwari</h3>
                <p>Ahmdabad</p>
                <p>abc</p>
                <p>200Rs. onwards</p>
            </div>
        </div>
        <div className="eventname">
            <div className="eventimage">
                <img src={standman} alt="" />
            </div>
            <div className="evdate">
                <p>17-06-2024</p>
            </div>
            <div className="evdetails">
                <h3>Sandeep Maheshwari</h3>
                <p>Surat</p>
                <p>abc</p>
                <p>200Rs. onwards</p>
            </div>
        </div>
        <div className="eventname">
            <div className="eventimage">
                <img src={standman} alt="" />
            </div>
            <div className="evdate">
                <p>24-06-2024</p>
            </div>
            <div className="evdetails">
                <h3>Sandeep Maheshwari</h3>
                <p>Mumbai</p>
                <p>abc</p>
                <p>240Rs. onwards</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}
