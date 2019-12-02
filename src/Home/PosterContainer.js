import React from 'react';
import Poster from '../components/Poster'

const PosterContainer = (props) => {

    return (
      <div className="PosterContainer">
        {props.allMovies.slice(0,6).map(movie => <Poster movie={movie} />)}
      </div>
    )

}

export default PosterContainer