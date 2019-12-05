import React, { Component } from 'react';
import ShowContainer from './ShowContainer'
import DetailsContainer from './DetailsContainer'
import Navbar from '../components/Navbar'
import '../style/show.css'

class Show extends Component { 

  state = {
      currentMovie: {},
      movieComments: []
  }

  componentDidMount() {
    fetch(`http://localhost:3001/movie/${this.props.movieId}`)
    .then(res => res.json())
    .then(movie => {
      this.setState({currentMovie: movie},
      this.getMovieComments(movie))
    })
  }

  getMovieComments = (movie) => {
    let movieApiID;
    movie.movieAPI_ID ? movieApiID = movie.movieAPI_ID : movieApiID = movie.id
    fetch(`http://localhost:3001/comments/movie/${movieApiID}`)
    .then(res => res.json())
    .then(comments => this.setState({movieComments: comments}))
  }

  render() {
    return (
      <div className="Showpage">
        <Navbar />
        <ShowContainer movie={this.state.currentMovie}/>
        <DetailsContainer movie={this.state.currentMovie} newCommnetAdded={this.props.newCommnetAdded}/>
      </div>
    )
  }

}

export default Show