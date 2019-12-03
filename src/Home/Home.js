import React, { Component } from 'react';
import Header from './Header'
import PosterContainer from './PosterContainer'
import PopularContainer from './PopularContainer'
import TopRatedContainer from './TopRatedContainer'
import {Link} from 'react-router-dom'
import '../style/home.css'

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="homeButtons">
          <Link className="item ui inverted yellow button" to="/movies">Movies</Link>
          <Link className="item ui inverted yellow button" to="/login">Login</Link>
        </div>
        <Header />
        <PosterContainer allMovies={this.props.allMovies}/>
        <PopularContainer popularMovies={this.props.popularMovies}/> 
        <TopRatedContainer topratedMovies={this.props.topratedMovies}/>
      </div>
    )
  }

}

export default Home
