import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from '../Home/Home'
import MovieSearch from '../MoviesSearch/MovieSearch'
import LoginPage from '../LoginSignup/LoginPage'
import Profile from '../Profile/Profile'
import Show from '../Show/Show'
import Swal from 'sweetalert2'
import About from '../about/About'

class App extends Component {

  state = {
    allMovies: [],
    popularMovies: [],
    topratedMovies: [],
    currentUser: [],
    allComments: [],
    myMovieList: []
  }

  componentDidMount() {
    // FETCHING MOVIE DATA
    fetch("http://localhost:3001/popular/1")
    .then(res => res.json())
    .then(popularMovies => this.setState({popularMovies: popularMovies}))

    fetch("http://localhost:3001/movies")
    .then(res => res.json())
    .then(allMovies => this.setState({allMovies: allMovies}))

    fetch("http://localhost:3001/top_rated")
    .then(res => res.json())
    .then(topratedMovies => this.setState({topratedMovies: topratedMovies}))

    fetch("http://localhost:3001/comments")
    .then(res => res.json())
    .then(comments => this.setState({allComments: comments}))

    // GETTING CURRENT USER
    if(localStorage.getItem('jwt')){
      fetch('http://localhost:3001/api/v1/profile', {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      .then(res => res.json())
      .then(user => {
        this.setState({currentUser: user}, this.getMovieLists(user))
      })
    }
  } // componentDidMount ends


  //GETTING MY MOVIES FROM MY LIST
  getMovieLists = (user) => {
    let myAccount;
    user.id ? myAccount = user.id : myAccount = user.user.id
    
    fetch('http://localhost:3001/movielists', {
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
        "User": myAccount
      }
    })
    .then(resp => resp.json())
    .then(movielists => {
      this.setState({myMovieList: movielists})
    })
  }


  // HANDLING LOGIN & SIGNUP
  loggingIn = (event, userInfo) => {
    event.preventDefault()
    console.log(userInfo)
    fetch('http://localhost:3001/api/v1/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',  
        'Accept': 'application/json'
      }, 
      body: JSON.stringify({
      user: {
          username: userInfo.username,
          password: userInfo.password
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      localStorage.setItem("jwt", data.jwt)
      this.setState({currentUser: data.user})
      this.getMovieLists(data.user)
    })
  }

  signUp = (event, userInfo) => {
    event.preventDefault();
    console.log("signing up", userInfo)

    fetch('http://localhost:3001/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
      user: {
        username: userInfo.username,
        password: userInfo.password,
        bio: userInfo.bio,
        avatar: userInfo.avatar,
        location: userInfo.location,
        favortie_genre: userInfo.genre
        }
      })
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      localStorage.setItem("jwt", data.jwt)
      this.setState({currentUser: data.user})
    })
  }

  signOut = () => {
    localStorage.removeItem('jwt')
    this.setState({currentUser: [], myMovieList: []})
  }


  // ADD MOVIE TO MY LIST
  addToList = (movieObj) => {

    fetch('http://localhost:3001/movielists', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
      }, 
      body: JSON.stringify({
        movie: movieObj,
        user: this.state.currentUser.user
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.original_title) {
      this.setState(pre => {return {myMovieList: [...pre.myMovieList, data]}}) }
      data.message ? ( 
          Swal.fire({
            icon: 'error',
            title: 'Unable to Add',
            text: `${data.message}`,
          })
      ) :(
        Swal.fire({
          icon: 'success',
          title: 'Added',
          text: `${data.original_title} has been added!`,
        })
      )
    })
  }


  // COMMENT ADD & REMOVE
  newCommnetAdded = (newComment) => {
    this.setState(pre => {
      return {allComments: [...pre.allComments, newComment]}
    })
  }

  handleDeleteComment = (comment) => {
    return (
      fetch(`http://localhost:3001/comments/${comment.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      .then(res => res.json())
      .then(deletedComment => {
        const newComments = this.state.allComments.filter(comm => comm.id !== deletedComment.id)
        this.setState({allComments: newComments})
      })
    )
  }

  removeFromAllComments = (deletedComment) => {
    const newComments = this.state.allComments.filter(comm => comm.id !== deletedComment.id)
    this.setState({allComments: newComments})
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Home allMovies={this.state.allMovies} popularMovies={this.state.popularMovies} topratedMovies={this.state.topratedMovies} currentUser={this.state.currentUser}
          signOut={this.signOut}/>} />

          <Route exact path="/movies" render={() => <MovieSearch allMovies={this.state.allMovies} currentUser={this.state.currentUser} signOut={this.signOut} addToList={this.addToList}/>}/>

          <Route exact path="/movies/:id" render={(props) => {
            let id = props.match.params.id
            return <Show movieId={id} newCommnetAdded={this.newCommnetAdded} allComments={this.state.allComments} currentUser={this.state.currentUser} 
            signOut={this.signOut} addToList={this.addToList} removeFromAllComments={this.removeFromAllComments}
            />
          }} />

          <Route exact path="/login" render={() => {
          return this.state.currentUser.length === 0 ? <LoginPage currentUser={this.state.currentUser} loggingIn={this.loggingIn}
          signUp={this.signUp} /> : <Redirect to="/profile"/>
          }}/>
 
          <Route exact path="/profile" render={() => {
          return this.state.currentUser.length === 0 ? <Redirect to="/login"/> :
          < Profile currentUser={this.state.currentUser} 
          signOut={this.signOut} handleDeleteComment={this.handleDeleteComment} allComments={this.state.allComments} myMovieList={this.state.myMovieList}/> 
          
          }}/> 
          
          <Route exact path="/about" render={() => < About />} />
        </div>
      </Router>
    )
  }

}

export default App
