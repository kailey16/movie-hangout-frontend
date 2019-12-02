import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home'



class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          Movie hangout
          <Route path="/" component={Home}/>
        </div>
      </Router>
    )
  }

}

export default App
