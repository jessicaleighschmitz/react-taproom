import React from 'react';
import { Link } from 'react-router-dom';
//
// import ShoeList from './ShoeList';
// import AboutUs from './AboutUs';

function Nav(){
  return(
    <div>
      <div className="grey-banner">Sign up to get a sneak peek at our upcoming products.</div>
      <div className="nav">
        <div className="nav-left">
          <p><Link style={{textDecoration: "none", color: "#a3a5a7"}} to='/'>Home</Link></p>
        <p><Link style={{textDecoration: "none", color: "#a3a5a7"}}  to='/aboutUs'>About Us</Link></p>
        </div>
        <div className="nav-logo">
          <h2 className="logo">EVERLANE</h2>
        </div>
        <div className="nav-right">
          <p>Log in</p>
          <p>SignUp</p>
        </div>

      </div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Rubik:300');
          *{
            margin: 0;
          }
          .grey-banner{
            min-height: 45px;
            background-color: #a3a5a7;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Rubik', sans-serif;
            font-size: .8rem;
          }
          .nav{
            color: #a3a5a7;
            display: flex;
            min-height: 80px;
            display: flex;
            justify-content: space-between;
          }
          .nav-left, .nav-right{
            display: flex;
            justify-content: space-between;
          }
          .nav-left p, .nav-right p{
            padding: 20px;
          }
          .logo{
            padding-top: 20px;
          }
          p {
            text-decoration: none;
          }
          h2{

          }
          p{
            margin: 0;
          }
            `}</style>
    </div>
  );
}

export default Nav;
