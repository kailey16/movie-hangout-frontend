import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home/Home'
import MovieSearch from '../MoviesSearch/MovieSearch'
import LoginPage from '../LoginSignup/LoginPage'
import Profile from '../Profile/Profile'
import Show from '../Show/Show'

class App extends Component {

  state = {
    popularMovies: [],
    allMovies: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/popular/1")
    .then(res => res.json())
    .then(popularMovies => this.setState({popularMovies: popularMovies}))

    fetch("http://localhost:3001/movies")
    .then(res => res.json())
    .then(allMovies => this.setState({allMovies: allMovies}))
  }

  render() {
    console.log("App rendering")
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Home allMovies={this.state.allMovies} />} />
          <Route exact path="/movies" render={() => <MovieSearch allMovies={this.state.allMovies}/>}/>
          <Route exact path="/movies/:id" render={(props) => {
            let id = props.match.params.id
            let foundMovie = this.state.movies.find(id)
            return <Show movie={foundMovie} />
          }} />
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/profile" component={Profile}/>
        </div>
      </Router>
    )
  }

}

export default App
