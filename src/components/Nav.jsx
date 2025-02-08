import logo from '../assets/icon.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

function Nav() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="nav">
                <div className="icon">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`content ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li onClick={() => { navigate('/'); setMenuOpen(false); }}>HOME</li>
                        <li onClick={() => { navigate('/about'); setMenuOpen(false); }}>ABOUT</li>
                        <li onClick={() => { navigate('/events'); setMenuOpen(false); }}>EVENTS</li>
                        <li onClick={() => { navigate('/gallery'); setMenuOpen(false); }}>GALLERY</li>
                        <li onClick={() => { navigate('/contact'); setMenuOpen(false); }}>CONTACT</li>
                    </ul>
                    <div className="button btn">
                        <a href="/sign"><button>Sign In</button></a>
                    </div>
                </div>
                <div className="button btn2">
                    <a href="/sign"><button>Sign In</button></a>
                </div>
            </div>
        </div>
    );
}

export default Nav;
