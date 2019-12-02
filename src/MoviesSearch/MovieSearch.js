import React, { Component } from 'react'
import FilterBar from './FilterBar'
import CardsContainer from './CardsContainer'

class MovieSearch extends Component {

  render() {
    return (
      <div className="MovieSearch">
        MovieSearch
        <FilterBar />
        <CardsContainer />
      </div>
    )
  }

}

export default MovieSearch