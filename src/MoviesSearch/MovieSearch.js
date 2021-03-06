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
      searchText: "",
      genre: "",
      sortBy: ""
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
  }

  updateGenre = (event) => {  //updating the genre in the state and will eventually update the searchMovies array as well
    let genreString = event.target.value
    if (genreString !== "") {
      let genreFiltered = []
      this.props.allMovies.forEach(movie => {
        if (movie.genres.filter(genre => genre.name === genreString).length >= 1) {
          genreFiltered.push(movie) 
        } 
      })

      if(this.state.sortBy === "Name"){
        let sortedGenreMovies = genreFiltered.sort((a,b) => {
          return a.original_title > b.original_title ? 1 : -1
        })
        this.setState({searchMovies: sortedGenreMovies, genre: genreString})
      } else if (this.state.sortBy === "Rating") {
        let sortedGenreMovies = genreFiltered.sort((a,b) => {
          return a.vote_average > b.vote_average ? -1 : 1
        })
        this.setState({searchMovies: sortedGenreMovies, genre: genreString})
      }
      //update state with new array
      this.setState({searchMovies: genreFiltered, genre: genreString})
    }
  }

  updateSortBy = (event) => {
    let sort = event.target.value
    if (sort === "Name") {

      let unsortedArray; 
      this.state.genre === "" ? unsortedArray = [...this.props.allMovies] : unsortedArray = [...this.state.searchMovies]
      
      let sortedByName =  unsortedArray.sort((a,b) => {
        return a.original_title > b.original_title ? 1 : -1
      })

      this.setState({searchMovies: sortedByName, sortBy: sort})
      
    } else if (sort === "Rating") {
      let unsortedArray;
      this.state.genre === "" ? unsortedArray = [...this.props.allMovies] : unsortedArray = [...this.state.searchMovies]
  
      let sortedByAverage =  unsortedArray.sort((a,b) => {
        return a.vote_average > b.vote_average ? -1 : 1
      })
      console.log(sortedByAverage)
      this.setState({searchMovies: sortedByAverage, sortBy: sort})

    } else {
      //when filter is on the default
    }
  }

  resetFilters = (event) => {
    if (this.state.genre === "" && this.state.sortBy === "" & this.state.searchText === ""){
      console.log("no filters to reset")
    } else {
      //resetting the genre drop down... bad practice/ needs refactor
      event.target.parentElement.parentElement.children[1].children[1].value = ""

      //resetting the sort by drop down.. bad practice/ needs refactor
      event.target.parentElement.parentElement.children[2].children[1].value = ""

      //resetting the search text
      event.target.parentElement.parentElement.children[0].children[1].value = ""
      
      //updating the state to original. Update genre, sort by and search text
      this.setState({searchText: "", genre: "", sortBy: ""})

      this.getMovies(this.state.page)
    }
  }


  render() {
    
    return (
      <div>
        <Navbar currentUser={this.props.currentUser} signOut={this.props.signOut}/>
        <div className="ui container movieCards">
          < FilterBar resetFilters={this.resetFilters}
          updateSearch={this.updateSearchText} updateGenre={this.updateGenre} updateSortBy={this.updateSortBy}/>
          
          < CardsContainer popularMovies={this.state.searchMovies.filter(movie => movie.original_title.toLowerCase().includes(this.state.searchText)).slice(0, 20)} addToList={this.props.addToList}/>
          {this.state.searchMovies.length !== 20 ? null : (
            < NextPage previousPage={this.previousPage} nextPage={this.nextPage} page={this.state.page}/>
          )}

        </div>
      </div>
    )
  }

}

export default MovieSearch