import React from 'react';


class LoginForm extends React.Component {
  constructor(){
    super();

    this.state ={
      username: "",
      password: ""
    }
  }
    
  
    updateFormFields = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }

    render(){    
      return (
        <div className="LoginForm">
          
          <div className="LoginForm-container">
            <h1>Login</h1>
            <form className="ui form">
              <div className="field">
                <label className="form-labels">First Name</label>
                <input onChange={(event) => this.updateFormFields(event)}
                type="text" name="username" placeholder="First Name"/>
              </div>
              <div className="field">
                <label className="form-labels">Password</label>
                <input onChange={(event) => this.updateFormFields(event)}
                type="password" name="password" placeholder="Last Name"/>
              </div>
              <button onClick={(event) => this.props.loggingIn(event, this.state)}
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