import React from 'react';
import BeerItem from './BeerItem';
import kegList from './BeerData';
import banner from '../assets/img/banner.jpg';

function BeerList() {
  return (
    <div>
      <div className="banner">

      </div>
      <h2>On Tap</h2>
      <div className="beers">
        {kegList.map((beer, index) =>
          <BeerItem name={beer.name}
            brewer={beer.brewer}
            abv={beer.abv}
            price={beer.price}
            remaining={beer.remaining}
            key={index}/>
        )}
      </div>

      <style jsx>{`
        .banner{
        background-image: url(${banner});
        background-size: cover;
        background-position: center;
        max-width: 1200px;
        min-height: 800px;
        margin: 0 auto;
        }
          `}</style>
    </div>
  );
}

export default BeerList;
