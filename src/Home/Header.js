import React from 'react';
import '../style/header.css'

class Header extends React.Component {

  componentDidMount() {
    if ( navigator.platform.indexOf('Win') !== -1 ) {
      window.document.getElementById("wrapper").setAttribute("class", "windows");
    } else if ( navigator.platform.indexOf('Mac') !== -1 ) {
      window.document.getElementById("wrapper").setAttribute("class", "mac");
    } 
  }

  render() {
    return (
      <div className="header">
      <div id="wrapper">
        <div className="future-cop">
          <h3 className="future">Movie</h3>
          <h1 className="cop">HANGOUT</h1>
        </div>
      </div>
      </div>
    )
  }
}

export default Header