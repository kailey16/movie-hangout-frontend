import React, { Component } from 'react';
import ShowContainer from './ShowContainer'
import DetailsContainer from './DetailsContainer'
import Navbar from '../components/Navbar'
import '../style/show.css'

class Show extends Component { 

  state = {
      currentMovie: {},
      movieComments: []
  }

  componentDidMount() {
    fetch(`http://localhost:3001/movie/${this.props.movieId}`)
    .then(res => res.json())
    .then(movie => {
      this.setState({currentMovie: movie},
      this.getMovieComments(movie))
    })
  }

  getMovieComments = (movie) => {
    let movieApiID;
    movie.movieAPI_ID ? movieApiID = movie.movieAPI_ID : movieApiID = movie.id
    
    fetch(`http://localhost:3001/comments/movie/${movieApiID}`)
    .then(res => res.json())
    .then(comments => this.setState({movieComments: comments}))
  }

  addComment = (comment) => {
    this.setState(pre => {
      return {movieComments: [...pre.movieComments, comment]}
    })
  }

  deleteComment = (comment) => {
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
      const newComments = this.state.movieComments.filter(comm => comm.id !== deletedComment.id)
      this.setState({movieComments: newComments})
      this.props.removeFromAllComments(deletedComment)
    })
  }

  render() {
    return (
      <div className="Showpage">
        <Navbar />
        <ShowContainer movie={this.state.currentMovie} addToList={this.props.addToList}/>
        <DetailsContainer movie={this.state.currentMovie} newCommnetAdded={this.props.newCommnetAdded} movieComments={this.state.movieComments} addComment={this.addComment} deleteComment={this.deleteComment} user={this.props.user}/>
      </div>
    )
  }

}

export default Show