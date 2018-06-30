import React from 'react';
import about from '../assets/img/about.jpg';

function About () {
  return (
    <div className="about-content">
      <h3>Our Story</h3>
      <div className="content">
        <img src={about}/>
        <div className="text">
          <p className="lighter">Hand-crafted, local</p>
          <p className="sub-header">Fermentation is Science</p>
          <p className="para">An Imperial Stout wastedly seeks a mating ritual. A Hommel Bier hibernates, but a blue moon over a Hazed and Infused thoroughly finds much coolness with the colt 45. Now and then, a hardly high ESB completely brainwashes the optimal Miller. The Bacardi Silver, a miserly jersey cow, and a sake bomb are what made America great!</p>
        </div>
      </div>
    <style jsx>{`
        *{
          margin: 0;
        }
        .about-content{
          margin-bottom: 150px;
        }
        .content{
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h3{
          background-color: #454342;
          color: #fff;
          font-size: 3rem;
          padding: 50px;
          text-align: center;
          margin-top: 50px;

        }
        .lighter{
          color:#B2AFAD;
          font-weight: light;
          margin-bottom: 12px;
        }
        .sub-header{
          font-size: 2.5rem;
          font-weight: bold;
          margin-top: 0;
          margin-bottom: 12px;
        }
        .para{
          line-height: 1.6;
          max-width: 500px;
        }
        .text{
          padding-right: 80px;
        }
        img{
          padding: 100px 70px;
        }
          `}</style>
    </div>
  );
}
 export default About;
