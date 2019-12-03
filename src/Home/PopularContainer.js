import React from 'react';
import Poster from '../components/Poster'

const PopularContainer = (props) => {

    return (
      <div className="PopularContainer homeRow">
        <p className="rowTitle">Most Popular Movies</p>
        <div className="rowContainer">
          {props.popularMovies.slice(0,3).map(movie => <Poster key={movie.id} movie={movie} classes="posterImg poster-glow" />)}
        </div>
      </div>
    )

}

export default PopularContainer