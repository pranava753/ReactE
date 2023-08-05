import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
export default function Login() {
  return (
    <div className='login'>
        <Link>
        <img className='login_logo' src='./images/logo6.png' alt='login'/>
        </Link>
      <div className='login_container'>
        <h1>Sign In</h1>
        <form>
            <h5>G-Mail Id</h5>
            <input type='email'/>
            <h5>Password</h5>
            <input type='password'/>
            <button type='submit' className='login_signInButton'>Sign In</button>
        </form>
        <p>By Signing-In, you agree to Congo's Terms and Conditions</p>
        <button className='login_registerButton'>Create your Congo Account</button>
      </div>
    </div>
  )
}
