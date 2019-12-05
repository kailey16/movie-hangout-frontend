import React, { Component } from 'react';
import UserContainer from './UserContainer'
import MymoviesContainer from './MymoviesContainer'
import CommentRating from '../components/CommentRating'
import Navbar from '../components/Navbar'
import '../style/profile.css'


class Profile extends Component {

  render() {
    let user;
    this.props.currentUser.user ? user = this.props.currentUser.user : user = this.props.currentUser

    let myComments;
    user ? (myComments = this.props.allComments.filter(comm => comm.user_id === user.id)) : (myComments = [])

    return (
      <div className="Profile">
        <Navbar currentUser={this.props.currentUser} signOut={this.props.signOut}/>
        <div id="profileCon" className="ui grid">
          <UserContainer user={user}/>
          <MymoviesContainer />
          <CommentRating classes="four wide column" movieComments={myComments} deleteComment={this.props.handleDeleteComment}/>
        </div>
      </div>
    )
  }

}

export default Profile