import React from 'react';
import {Link} from 'react-router-dom'
import '../style/navbar.css'

const Navbar = (props) => {  
  return (

    <div id="navbar" className="ui top fixed menu">
      <Link className="item" to="/">
        <i className="video icon"></i>
      </Link>
      <Link className="item" to="/movies">Movies</Link>
      <Link className="item" to="/profile">Profile</Link>
      {!Array.isArray(props.currentUser) ? (
        // eslint-disable-next-line
        <a onClick={() => props.signOut()}
        className="item" to="/signout">Sign Out</a>
      ) : (
        <Link className="item" to="/login">Login</Link>
      )}
      
    </div>
  )
}

export default Navbar


