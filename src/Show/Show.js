import React, { Component } from 'react';
import ShowContainer from './ShowContainer'
import DetailsContainer from './DetailsContainer'

class Show extends Component {

  render() {
    return (
      <div className="Show">
        <ShowContainer />
        <DetailsContainer />
      </div>
    )
  }

}

export default Show