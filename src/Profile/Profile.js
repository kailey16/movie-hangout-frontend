import React, { Component } from 'react';
import UserContainer from './UserContainer'
import MymoviesContainer from './MymoviesContainer'
import CommentRating from '../components/CommentRating'
import Navbar from '../components/Navbar'

class Profile extends Component {

  render() {
    console.log(this.props)
    return (
      
      <div className="Profile">
        <br></br><br></br>
        <Navbar currentUser={this.props.currentUser} signOut={this.props.signOut}/>
        <UserContainer />
        <MymoviesContainer />
        <CommentRating />
      </div>
    )
  }

}

export default Profile