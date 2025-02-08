import './Login.css'
import { Link, useLocation } from 'react-router-dom';

// import SignUp from './Signup';

function Login(){
    return (
        <div className='wrapper'>
        <div className='login'>
            <h2>Login</h2>
          <div className='inputs'>
            <div className='input'>
                <label>UserName:</label>
                <input type="text" name="" id="inputLogin" placeholder='Enter UserName' required/>
            </div>
            <div className='input'>
                <label>Password:</label>
                <input type="password" name="" id="inputLogin" placeholder='Enter Password' required/>
            </div>
            <p>Forget Password?</p>
            <button className='btn1Login'><Link to="/" className={`homea ${location.pathname === '/' ? 'active' : ''}`}>Login</Link></button>
            <button className='btnLogin'><Link to="/signup" className={`homea ${location.pathname === '/signup' ? 'active' : ''}`}>Signup</Link></button>
          </div>
        </div>
        </div>
    );
} 

export default Login