import React, { Component } from 'react';
import Header from './Header'
import PosterContainer from './PosterContainer'
import PopularContainer from './PopularContainer'
import TopRatedContainer from './TopRatedContainer'
import {Link} from 'react-router-dom'
import '../style/home.css'

class Home extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="Home">
        <div className="homeButtons">
          <Link className="item ui inverted yellow button" to="/movies">Movies</Link>
          {!Array.isArray(this.props.currentUser) ? <Link className="item ui inverted yellow button" to="/profile">Profile</Link> : <Link className="item ui inverted yellow button" to="/login">Login</Link>}
          
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
