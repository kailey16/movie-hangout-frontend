import React from 'react';
import '../sergio-styles/search_page.css';


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
            <select className="ui fluid search dropdown">
              <option value="">Genre</option>
              <option value="action">Action</option>
            </select>
          </div>

          <div className="field dropdown-container">
            <label>Sort By: </label>
            <select className="ui fluid search dropdown">
              <option value="">Sort By</option>
              <option value="action">Name</option>
              <option value="action">Rating</option>
            </select>
          </div>

          <div className="reset-btn-container">
            <button className="ui blue button">Reset</button>
          </div>
      </div>
    )

}

export default FilterBar