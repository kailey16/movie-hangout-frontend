import React, { Component } from 'react';
import Header from './Header'
import PosterContainer from './PosterContainer'
import PopularContainer from './PopularContainer'
import TopRatedContainer from './TopRatedContainer'

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Header />
        <PosterContainer />
        <PopularContainer /> 
        <TopRatedContainer />
      </div>
    )
  }

}

export default Home
