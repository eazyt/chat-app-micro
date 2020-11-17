import React, { useState } from "react";
import loginImage from '../../assets/images/login.svg'
import { Link } from 'react-router-dom'
import './Auth.scss'
// import axios from 'axios'
// import AuthService from '../../services/authService';
import { login } from '../../store/actions/auth'
import { useDispatch } from 'react-redux'

const Login = ({ history}) => { 
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitForm = (e) => { 
    e.preventDefault()
    dispatch(login({
      email,
      password
    }, history))
    // console.log({ email, password })
    // AuthService.login({ email, password }).then(res => { console.log(res)})
    // axios.post('http://127.0.0.1:3000/login', {email, password})
    //   .then((res) => { 
    //     console.log(res)
    //   })
    //   .catch((err) => { 
    //     console.log('err', err)
    //   })
  }

  return (
    <div id='auth-container'>
      <div id='auth-card'>
        <div>
          <div id='image-section'>
            <img src={loginImage} alt='login'/>
          </div>
          <div id='form-section'>
            <h2>Welcome Back</h2>

            <form onSubmit={ submitForm }>
              <div className='input-field mb-1'>
                <input onChange={ e => setEmail(e.target.value)} value={ email} required='required' type='text' placeholder='Email'/>
              </div>
              <div className='input-field mb-1'>
                <input onChange={ e => setPassword(e.target.value)} value={ password } required='required' type='password' placeholder='Password'/>
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
