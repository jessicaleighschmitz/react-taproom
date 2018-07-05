import React from 'react';
import instagram from '../assets/img/instagram.png';
import facebook from '../assets/img/facebook.png';
import twitter from '../assets/img/twitter.png';
import { Link } from 'react-router-dom';

function Footer () {
  return(
    <div className='footer'>
      <div className="social">
        <img src={instagram}/>
        <img src={facebook}/>
        <img src={twitter}/>
      </div>
      <div>
        <div className="footer-container">
          <p>&copy;2018 Fermented, LLC. </p>
          <div className="contact">
            <p>Contact</p>
            <p><Link style={{textDecoration:'none', color: '#000'}} to='/about'>About</Link></p>
          </div>
        </div>
      </div>
      <style jsx>{`
        *{
          margin: 0;
        }
        .footer{
          background-color: #E48F3B;
          min-height: 100px;
        }
        p{
          color: #000;
        }
        .social{
          display: flex;
          justify-content: center;
          padding-top: 30px;
        }
        img{
          padding: 15px;
        }
        .contact{
          display:flex;
          justify-content: flex-end;
        }
        .footer-container{
          display: flex;
          justify-content: space-between;
        }
        .contact p, .footer-container p{
          padding: 15px;
        }
            `}</style>
    </div>
  );
}

export default Footer;
