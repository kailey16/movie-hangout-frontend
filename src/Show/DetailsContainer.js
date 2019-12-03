import React, { Component } from 'react';
import CommentRating from '../components/CommentRating'
import NewCommentForm from './NewCommentForm'

class DetailsContainer extends Component {

  render() {
    return (
      <div className="DetailsContainer">
        <div className="comments">
          <p>Leave comments for the movie</p>
          <div class="ui star rating" data-rating="3" data-max-rating="5"></div>
          <NewCommentForm /> 
          <CommentRating />
        </div>
      </div>
    )
  }

}

export default DetailsContainer