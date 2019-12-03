import React, { Component } from 'react';
import ShowContainer from './ShowContainer'
import DetailsContainer from './DetailsContainer'
import Navbar from '../components/Navbar'

class Show extends Component {

  state = {
      currentMovie: {}
  }
  
  componentDidMount() {
    fetch(`http://localhost:3001/movie/${this.props.movieId}`)
    .then(res => res.json())
    .then(movie => this.setState({currentMovie: movie}))
  }

  render() {
    return (
      <div className="Showpage">
        <Navbar />
        <ShowContainer />
        <DetailsContainer />
      </div>
    )
  }

}

export default Show