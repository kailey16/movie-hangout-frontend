import React from 'react';

const ShowContainer = (props) => {
  let { title, overview, backdrop_path } = props.movie 
  let background = `https://image.tmdb.org/t/p/original${backdrop_path}`

    return ( 
      <div className="ShowContainer" style={{backgroundImage: `url(${background})`}}>
        <div className="showTitle">{title}</div>
        <div className="showOverview">{overview}</div>
      </div>
    )

}

export default ShowContainer