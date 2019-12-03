import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {  

  return (

    <div className="ui top fixed menu">
      <Link className="item" to="/">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2018/12/Movie-roll-cinema-entertainment-icon-EPS-10-by-Hoeda80-580x386.jpg" alt="logo"/>
      </Link>
      <Link className="item" to="/movies">Movies</Link>
      <Link className="item" to="/profile">Profile</Link>
      <Link className="item" to="/login">Login</Link>
    </div>
  )
}

export default Navbar


