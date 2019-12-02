import React, { Component } from 'react';
import CommentRating from '../components/CommentRating'
import NewCommentForm from './NewCommentForm'

class DetailsContainer extends Component {

  render() {
    return (
      <div className="DetailsContainer">
        <NewCommentForm />
        <CommentRating />
      </div>
    )
  }

}

export default DetailsContainer