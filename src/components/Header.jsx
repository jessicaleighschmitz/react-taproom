import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

function Header () {
  return(
    <div>
      <div className="header-flex">
      <p className='home'><Link to='/'>Home</Link></p>
      <p className='newsLink'><Link to='/newsTicker'>Craft Brew News</Link></p>
      </div>
      <div className='logo'>
        <p><Link to='/'><img src={logo}/></Link></p>
        <h1><Link to='/'>Fermented</Link></h1>
      </div>
    </div>
  );
}

export default Header;
