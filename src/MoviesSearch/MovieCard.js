import React from 'react';
import {Link} from 'react-router-dom'

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

const MovieCard = (props) => {
    let fetchID;
    props.movieObject.movieAPI_ID ? fetchID = props.movieObject.movieAPI_ID : fetchID = props.movieObject.id

    let imageUrl = `https://image.tmdb.org/t/p/w500${props.movieObject.poster_path}`
    return (
      <div className="movie-card-2">
        <div className="movie-image-container">
          <img className="movie-poster" alt="movie-poster" src={imageUrl}></img>
        </div>

        <div className="movie-card-details">
          <div className="movie-card-title">
            <h3>{props.movieObject.title || props.movieObject.original_title}</h3>
          </div>

            <button className="ui inverted violet basic button justify-btn">
              <span className="movie-card-links addBtn">Add</span>
            </button>
            
            <button className="ui inverted violet basic button justify-btn">
              <span className="movie-card-links moreInfo">
                <Link to={`/movies/${fetchID}`}>Details</Link>
              </span>
            </button>
  
        </div>
      </div>
    )

}

export default MovieCard