import React from 'react';


const ShowContainer = (props) => {
  let { title, overview, backdrop_path } = props.movie 
  let background = `https://image.tmdb.org/t/p/original${backdrop_path}`

    return ( 
      <div className="ShowContainer" style={{backgroundImage: `url(${background})`}}>
        <div className="showTitle">{title}</div>
        <div className="showOverview">{overview}</div>
        <button onClick={() => {props.addToList(props.movie)}}
        id="saveButton" className="item ui inverted yellow button" to="/movies">Save</button>
      </div>
    )

}

export default ShowContainer