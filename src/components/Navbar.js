import React from 'react';
import {Link} from 'react-router-dom'
import '../style/navbar.css'
import Logo from '../style/logo.png'

const Navbar = () => {  

  return (

    <div id="navbar" className="ui top fixed menu">
      <Link className="item" to="/">
        {/* <img src={Logo} alt="logo"/> */}
        <i class="video icon"></i>
      </Link>
      <Link className="item" to="/movies">Movies</Link>
      <Link className="item" to="/profile">Profile</Link>
      <Link className="item" to="/login">Login</Link>
    </div>
  )
}

export default Navbar


