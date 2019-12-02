import React, { Component } from 'react';
import UserContainer from './UserContainer'
import MymoviesContainer from './MymoviesContainer'
import CommentRating from '../components/CommentRating'

class Profile extends Component {

  render() {
    return (
      <div className="Profile">
        Profile
        <UserContainer />
        <MymoviesContainer />
        <CommentRating />
      </div>
    )
  }

}

export default Profile