import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import './navbar.css'
import Logo from '../../assets/Logo.jpeg'

function NavBar() {
  const location = useLocation(); // Get current route information

  return (
    <div className="NavBar">
      <nav>
        <ul className="menu">
          <div>
            <Link to="/">
              <img src={Logo} alt="logo" className='logo' />
            </Link>
          </div>
          <li><Link to="/" className={`homea ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link></li>
          <li><Link to="/about" className={`homea ${location.pathname === '/about' ? 'active' : ''}`}>ABOUT</Link></li>
          <li><Link to="/events" className={`homea ${location.pathname === '/events' ? 'active' : ''}`}>EVENTS</Link></li>
          <li><Link to="/gallery" className={`homea ${location.pathname === '/gallery' ? 'active' : ''}`}>GALLERY</Link></li>
          <li><Link to="/contact" className={`homea ${location.pathname === '/contact' ? 'active' : ''}`}>CONTACT</Link></li>
          <li className='signin'> <Link to="/login"className={`homea ${location.pathname === '/login' ? 'active' : ''}`}>SIGN IN</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
