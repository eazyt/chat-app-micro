import React from "react";
import loginImage from '../../assets/images/login.svg'
import { Link } from 'react-router-dom'
import './Auth.scss'

const Login = () => { 
  return (
    <div id='auth-container'>
      <div id='auth-card'>
        <div>
          <div id='image-section'>
            <img src={loginImage} alt='login'/>
          </div>
          <div id='form-section'>
            <h2>Welcome Back</h2>

            <form>
              <div className='input-field mb-1'>
                <input placeholder='Email'/>
              </div>
              <div className='input-field mb-1'>
                <input placeholder='Password'/>
              </div>
              <button>Login</button>
            </form>
            <p> Don't have an account? <Link to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Login;
