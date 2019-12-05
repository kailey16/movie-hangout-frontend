import React, { Component } from 'react'
import MovieCard from './MovieCard'

class CardsContainer extends Component{
  

  render(){

    return (
      <div className="CardsContainer">
        {this.props.popularMovies.map(movie => {
          return <MovieCard key={movie.id} movieObject={movie} addToList={this.props.addToList}/>
        })}
      </div>
    )
  }
}

export default CardsContainer
