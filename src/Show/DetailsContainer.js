import React, { Component } from 'react';
import CommentRating from '../components/CommentRating'
import NewCommentForm from './NewCommentForm'
import Poster from '../components/Poster'

class DetailsContainer extends Component {

  render() {
    return (
      <div className="DetailsContainer">
        <div className="showMovieInfo">
          <Poster movie={this.props.movie} classes="showPagePoster" />
        </div>
        <div className="comments">
          <p>Leave comments for the movie</p>
          <NewCommentForm /> 
          <CommentRating />
        </div>
      </div>
    )
  }

}

export default DetailsContainer