import React from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Navbar from '../components/Navbar'
import "../sergio-styles/login_signup_page.css"

class LoginPage extends React.Component {
  constructor(){
    super();

    this.state = {
      signUp: true
    }
  }

  switchForm = () => {
    let currentState = this.state.signUp
    this.setState({signUp: !currentState})
  }

  render(){
    return (
      <div className="loginPage">
        <div className="login-page-navbar">
          <Navbar />
        </div>
       
        <div className="login-signup-container">
          {this.state.signUp ? <SignupForm switchForm={this.switchForm} signUp={this.props.signUp}/> : <LoginForm loggingIn={this.props.loggingIn} switchForm={this.switchForm}/>}
        </div>

        <div className="form-about-container">
          <div className="form-about-header">
            <h1>Welcome to the Movie Hangout!</h1>
          </div>

          <div className="form-about-section">
            <p>Login or Sign to enjoy all of the great feature we have to offer.</p>
          </div>

          <div className="form-about-btn-container">
              <button className="ui yellow button">Browse</button>
          </div>
          
        </div>

      </div>
    )
  }
}

export default LoginPage