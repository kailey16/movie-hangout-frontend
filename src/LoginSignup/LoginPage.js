import React from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Navbar from '../components/Navbar'
import "../sergio-styles/login_signup_page.css"

class LoginPage extends React.Component {
  constructor(){
    super();

    this.state = {
      signUp: false
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
          <Navbar currentUser={this.props.currentUser}/>
        </div>
       
        <div className="login-signup-container">
          {this.state.signUp ? <SignupForm switchForm={this.switchForm} signUp={this.props.signUp}/> : <LoginForm loggingIn={this.props.loggingIn} switchForm={this.switchForm}/>}
        </div>

        <div className="form-about-container">
          {/* Photo by Joshua Eckstein on Unsplash */}
          <div className="form-about-header">
            <h1>Welcome to the Movie Hangout!</h1>
          </div>

          <div className="form-about-section">
            <p>The Movie Hangout was created to be able to browse and save movies to a favorites list. Feel free to browse around hitting the browse button below! Please sign up or log in, if you want to save movies to your list or add reviews. Happy broswing!</p>
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