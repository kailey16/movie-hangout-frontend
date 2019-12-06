import React from 'react';
import Poster from '../components/Poster'

const MyMoviesContainer = (props) => {
    return (
      <div className="MyMoviesContainer eight wide column">
        <div className="myMoviesTitle">SAVED MOVIES</div>
        {props.myMovieList.map(movie => <Poster classes="posterImg" key={movie.id} movie={movie}/>)}
      </div>
    )

}

export default MyMoviesContainer