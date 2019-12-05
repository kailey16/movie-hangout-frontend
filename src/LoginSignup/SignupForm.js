import React from 'react';


class SignupForm extends React.Component{
    constructor(){
      super();

      this.state = {
        username: "", 
        password: "",
        bio: "",
        avatar: "",
        location: "",
        genre: ""
      }
    }

    updateFormFields = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }
    
    render(){
      return (
        <div className="SignupForm LoginForm">
          <div className="LoginForm-container">
            <h1>Sign Up</h1>
            <form className="ui form">
              <div className="field">
                <label className="form-labels">Username</label>
                <input onChange={(event) => this.updateFormFields(event)}
                type="text" name="username" placeholder="First Name"/>
              </div>

              <div className="field">
                <label className="form-labels">Password</label>
                <input onChange={(event) => this.updateFormFields(event)}
                type="password" name="password" placeholder="Password"/>
              </div>
              
              <div className="field">
                <label className="form-labels">Bio</label>
                <textarea onChange={(event) => this.updateFormFields(event)}
                rows="2" type="textarea" name="bio" placeholder="Bio"/>
              </div>

              <div className="field">
                <label className="form-labels">Avatar</label>
                <input onChange={(event) => this.updateFormFields(event)}
                type="text" name="avatar" placeholder="Avatar"/>
              </div>

              <div className="field">
                <label className="form-labels">Location</label>
                <input onChange={(event) => this.updateFormFields(event)}
                type="text" name="location" placeholder="Location"/>
              </div>

              <div className="field">
                <label className="form-labels">Favorite Genre</label>
                <input onChange={(event) => this.updateFormFields(event)}
                type="text" name="genre" placeholder="Genre"/>
              </div>

              <button onClick={(event) => this.props.signUp(event, this.state)}
              className="ui button" type="submit">Submit</button>

              <span> Or <span className="signup-text"
                onClick={() => this.props.switchForm()}> Back to Login </span></span>
            </form>
          </div>
        </div>
      )  
    }
}

export default SignupForm