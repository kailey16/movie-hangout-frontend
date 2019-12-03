import React, { Component } from 'react';
import ShowContainer from './ShowContainer'
import DetailsContainer from './DetailsContainer'
import Navbar from '../components/Navbar'

class Show extends Component {

  render() {
    return (
      <div className="Showpage">
        <Navbar />
        <ShowContainer />
        <DetailsContainer />
      </div>
    )
  }

}

export default Show