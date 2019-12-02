import React from 'react';

const Poster = (props) => {

  return (
    <div className="Poster">
      {props.movie &&
       <img className="posterImg" src={"https://image.tmdb.org/t/p/w500" + props.movie["poster_path"]} />
      } 
    </div>
  )

}

export default Poster