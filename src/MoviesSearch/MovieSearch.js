import React, { Component } from 'react'
import FilterBar from './FilterBar'
import CardsContainer from './CardsContainer'
import Navbar from '../components/Navbar'

class MovieSearch extends Component {

  render() {
    return (
      <div className="MovieSearch">
        <Navbar />
        <FilterBar />
        <CardsContainer />
      </div>
    )
  }

}

export default MovieSearch