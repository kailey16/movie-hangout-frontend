import React, { Component } from 'react';
import CommentRating from '../components/CommentRating'
import NewCommentForm from './NewCommentForm'
import Poster from '../components/Poster'

class DetailsContainer extends Component {

  render() {
    const { title, genres, production_companies, release_date, runtime } = this.props.movie
    return (
      <div className="DetailsContainer ui grid">
        <div className="six wide column">
          <Poster movie={this.props.movie} classes="showPagePoster" />
        </div>
        <div className="movieDetails five wide column">
          <p className="detailTitle">{title}</p>
          <p className="details">Released on <span className="detailSpan">{release_date}</span></p>
          <p className="details">Runtime <span className="detailSpan">{runtime} minutes</span></p>
          {genres && <p className="details">Genres<br></br><span className="detailSpan">{genres.map(gen => gen.name).join(", ")}</span></p>}
          {production_companies && <p className="details">Production Companies<br></br><span className="detailSpan">{production_companies.map(com => com.name).join(", ")}</span></p>}
        </div>
        <div className="comments five wide column">
          <NewCommentForm /> 
          <CommentRating />
        </div>
      </div>
    )
  }

}

export default DetailsContainer