import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

function Header () {
  return(
    <div className="header">
      <div className='logo'>
        <p><Link to='/'><img src={logo}/></Link></p>
        <h1><Link style={{textDecoration: "none"}} to='/'>Fermented</Link></h1>
      </div>
      <div className="header-right">
        <p className='newsLink'><Link style={{textDecoration: "none"}} to='/newsTicker'>Craft Brew News</Link></p>
      </div>
      <style jsx>{`
          *{
            margin: 0;
          }
          .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
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
            padding-right:40px;
          }


            `}
      </style>

    </div>
  );
}

export default Header;
