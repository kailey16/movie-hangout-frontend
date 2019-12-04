import React from 'react';
import {Link} from 'react-router-dom'

class Poster extends React.Component {

  render() {

    if (this.props.movie) {
      if (this.props.movie["movieAPI_ID"]) {
        return (
          <div className="Poster">
            <Link to={`/movies/${this.props.movie.movieAPI_ID}`}><img className={this.props.classes} alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + this.props.movie["poster_path"]}/></Link>
          </div>
        )
      } else {
        return (
          <div className="Poster">
            {this.props.movie && (
            <Link to={`/movies/${this.props.movie.id}`}><img className={this.props.classes} alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + this.props.movie["poster_path"]}/></Link>)
            } 
          </div>
        )
      }
    }

  }

}

export default Poster