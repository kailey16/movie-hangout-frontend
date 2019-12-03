import React, { Component } from 'react'
import FilterBar from './FilterBar'
import CardsContainer from './CardsContainer'
import Navbar from '../components/Navbar'
import NextPage from '../MoviesSearch/NextPage'

class MovieSearch extends Component {
  constructor(){
    super()

    this.state = {
      searchMovies: [],
      page: 1,
      searchText: ""
    }
  }

  componentDidMount(){
    this.getMovies(this.state.page)
  }

  getMovies = (page) => {
    fetch(`http://localhost:3001/popular/${page}`)
    .then(resp => resp.json())
    .then(movies => this.setState({searchMovies: movies}))
  }

  nextPage = () =>{
    let nextPage = this.state.page
    nextPage++ //adding one to the page
    this.setState({
      page: nextPage
    },this.getMovies(nextPage))
  }

  previousPage = () => {
    let page = this.state.page
    let previousPage = page--
    previousPage <= 1 ? alert('Unable to go back') : this.setState({page: previousPage - 1}, 
      this.getMovies(previousPage - 1))
  }

  updateSearchText = (event) => {
    this.setState({
      searchMovies: this.props.allMovies,
      searchText: event.target.value
    })

    if (this.state.searchText === ""){
      this.getMovies(this.state.page);
    }
  }

  render() {
    return (
      <div>
          <Navbar />
        <div className="ui container">
          < FilterBar updateSearch={this.updateSearchText}/>
          < CardsContainer popularMovies={this.state.searchMovies.filter(movie => movie.original_title.toLowerCase().includes(this.state.searchText)).slice(0, 20)}/>
          {this.state.searchMovies.length > 20 ? null : (
            < NextPage previousPage={this.previousPage} nextPage={this.nextPage} page={this.state.page}/>
          )}
        </div>
      </div>
    )
  }

}

export default MovieSearch