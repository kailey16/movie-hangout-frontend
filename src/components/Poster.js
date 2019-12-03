import React from 'react';
import {Link} from 'react-router-dom'

class Poster extends React.Component {

  toShowPage = () => {

  }

  render() {
    return (
      <div className="Poster">
        {this.props.movie &&
        <Link className="item" to={`/movies/${this.props.movie.id}`}><img className={this.props.classes} alt="movie poster" src={"https://image.tmdb.org/t/p/w500" + this.props.movie["poster_path"]}/></Link>
        } 
      </div>
    )
  }

}

export default Poster