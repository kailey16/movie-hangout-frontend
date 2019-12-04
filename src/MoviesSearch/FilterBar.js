import React from 'react';
import '../sergio-styles/search_page.css';

let genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy",
              "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]

const FilterBar = (props) => {

    return (
      <div className="search-container">
        
          <div className="ui icon input">
            <i className="search icon"></i>
            <input onChange={(event) => props.updateSearch(event)}
            className="search-input" type="text" placeholder="Search..."></input>
          </div>

          <div className="field dropdown-container">
            <label>Genre: </label>
            <select onChange={(event) => props.updateGenre(event)}
            className="ui fluid search dropdown">
              <option value="">Genre</option>
              {genres.map(genre => {
                return <option key={genre} value={genre}>{genre}</option>
              })}
            </select>
          </div>

          <div className="field dropdown-container">
            <label>Sort By: </label>
            <select onChange={(event) => props.updateSortBy(event)}
            className="ui fluid search dropdown">
              <option value="">Sort By</option>
              <option value="Name">Name</option>
              <option value="Rating">Rating</option>
            </select>
          </div>

          <div className="reset-btn-container">
            <button onClick={(event) => props.resetFilters(event)}
            className="ui blue button">Reset</button>
          </div>
      </div>
    )

}

export default FilterBar