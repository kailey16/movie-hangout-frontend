import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Navbar from '../components/Navbar'
import MovieSearch from '../MoviesSearch/MovieSearch'
import LoginPage from '../LoginSignup/LoginPage'
import Profile from '../Profile/Profile'
import Show from '../Show/Show'

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/movies" component={MovieSearch}/>
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
