import React from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Navbar from '../components/Navbar'

const LoginPage = () => {

    return (
      <div className="LoginPage">
        <Navbar />
        <LoginForm />
        <SignupForm />
      </div>
    )

}

export default LoginPage