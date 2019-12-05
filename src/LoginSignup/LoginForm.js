import React from 'react';


class LoginForm extends React.Component {
    render(){
      
      return (
        <div className="LoginForm">
          
          <div className="LoginForm-container">
            <h1>Login</h1>
            <form className="ui form">
              <div className="field">
                <label className="form-labels">First Name</label>
                <input type="text" name="first-name" placeholder="First Name"/>
              </div>
              <div className="field">
                <label className="form-labels">Last Name</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
              </div>
              <button onClick={(event) => this.props.loggingIn(event)}
              className="ui button" type="submit">Submit</button>
  
              <span> Or <span className="signup-text"
              onClick={() => this.props.switchForm()}> Sign Up </span></span>
            </form>
          </div>
  
        </div>
      )
    }
}

export default LoginForm