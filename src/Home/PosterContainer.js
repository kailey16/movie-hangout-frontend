import React from 'react';
import Poster from '../components/Poster'
import '../097.mp4'

const PosterContainer = (props) => {

    return ( 
      <div>
          <video autoPlay muted loop id="video">
            <source src="https://www.videvo.net/videvo_files/converted/2014_12/preview/097.mp421508.webm" type="video/mp4" />
            <source src="https://www.videvo.net/videvo_files/converted/2014_12/preview/097.mp421508.webm" type="video/webm" />
          </video>
        <div className="posters">
          {props.allMovies.slice(10,16).map(movie => <Poster classes="posterImg" key={movie.id} movie={movie} />)}
        </div>
      </div>
    )

}

export default PosterContainer