import React from 'react';
import Poster from '../components/Poster'

const TopRatedContainer = (props) => {
  
    return (
      <div className="TopRatedContainer homeRow">
        <p className="rowTitle">Top Rated Movies</p>
        <div className="rowContainer">
          {props.topratedMovies.slice(0,3).map(movie => <Poster key={movie.id} movie={movie} classes="posterImg poster-glow" />)}
        </div>
      </div>
    )

}

export default TopRatedContainer