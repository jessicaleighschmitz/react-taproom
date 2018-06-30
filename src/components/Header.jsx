import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

function Header () {
  return(
    <div className="header">
      <div className='logo'>
        <p><Link to='/'><img src={logo}/></Link></p>
        <h1><Link style={{textDecoration: "none",             color: "#171614"}} to='/'>Fermented</Link></h1>
      </div>
      <div className="header-right">
        <p className='newsLink'><Link style={{textDecoration: "none", color: "#171614"}} to='/'>Home</Link></p>
        <p className='newsLink'><Link style={{textDecoration: "none", color: "#171614"}} to='/newsTicker'>Craft Brew News</Link></p>
        <p className='newsLink'><Link style={{textDecoration: "none", color: "#171614"}} to='/about'>About</Link></p>
      </div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Righteous');
          *{
            margin: 0;
          }
          .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          h1{
            font-family: 'Righteous', cursive;
            font-size: 3.5rem;
          }
           .header-right{
            display:flex;
          }
          .logo{
            display:flex;
            justify-content: center;
            align-items: center;
          }
          .header-right p{
            padding-right:20px;
          }
            `}
      </style>

    </div>
  );
}

export default Header;
