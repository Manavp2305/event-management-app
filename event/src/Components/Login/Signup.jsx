import './Signup.css'
import Login from './Login';
import { Link, useLocation } from 'react-router-dom';


function SignUp() {
    return (
        <div className='wrapper'>
            <div className='signup'>
                <h2>Signup</h2>
                <div className='inputs'>
                    <div className='input'>
                        <label>UserName:</label>
                        <input type="text" name="" id="inputLogin" placeholder='Enter UserName' required />
                    </div>
                    <div className='input'>
                        <label>Email:</label>
                        <input type="email" name="" id="inputLogin" placeholder='Enter Email' required />
                    </div>
                    <div id="radiobtn">
                        <input type="radio" id="male" name="gender" value="male" className='rbtn' />
                        <label htmlFor="male" className='rlabel'>Male</label>
                        <input type="radio" id="female" name="gender" value="female" className='rbtn' />
                        <label htmlFor="female" className='rlabel'>Female</label>
                        <input type="radio" id="other" name="gender" value="other" className='rbtn' />
                        <label htmlFor="other" className='rlabel'>Other</label>
                    </div>

                    <div className='input'>
                        <label>Phone Number:</label>
                        <input type="mobile" name="" id="inputLogin" placeholder='Enter Phone Number' required />
                    </div>
                    <div className='input'>
                        <label>Password:</label>
                        <input type="password" name="" id="inputLogin" placeholder='Enter Password' required />
                    </div>
                    <div className='input'>
                        <label>Confirm Password:</label>
                        <input type="password" name="" id="inputLogin" placeholder='Enter Password' required />
                    </div>
                    <button className='btn1Login'><Link to="/login" className={`homea ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link></button>
                    <button className='btnLogin'><Link to="/" className={`homea ${location.pathname === '/' ? 'active' : ''}`}>Signup</Link></button>
                </div>
            </div>
        </div>
    );
}

export default SignUp