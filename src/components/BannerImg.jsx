import React from 'react';
import banner from '../assets/img/banner.jpg';

function BannerImg (){
  return (
    <div>
      <div className="banner">
      </div>
      <style jsx>{`
        .banner{
        background-image: url(${banner});
        background-size: cover;
        background-position: center;
        max-width: 1200px;
        min-height: 800px;
        margin-top:40px;
        }
            `}</style>
    </div>
  );
}

export default BannerImg;
