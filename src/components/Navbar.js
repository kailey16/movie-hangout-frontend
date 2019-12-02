import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {  

  return (
    <div className="Header ui three item menu">
      <Link className="item" to="/movies">Movies</Link>
      <Link className="item" to="/profile">Profile</Link>
      <Link className="item" to="/login">Login</Link>
    </div>
  )
}

export default Navbar


