import React from 'react';
import {Link} from 'react-router-dom'

class Poster extends React.Component {

  render() {

    if (this.props.movie) {
      let fetchID;
      this.props.movie.movieAPI_ID ? fetchID = this.props.movie.movieAPI_ID : fetchID = this.props.movie.id

      return (
        <div className="Poster">
          <Link to={`/movies/${fetchID}`}><img className={this.props.classes} alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + this.props.movie["poster_path"]}/></Link>
        </div>
        )
      }
    }

}

export default Poster