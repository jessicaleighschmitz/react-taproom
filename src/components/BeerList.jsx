import React from 'react';
import BeerItem from './BeerItem';
import PropTypes from 'prop-types';
import banner from '../assets/img/banner.jpg';

function BeerList(props) {
  return (
    <div>
      <div className="banner">
      </div>
      <div className="on-tap">
      <h2>Currently Pouring</h2>
      </div>
      <div className="beers">
        {props.beerList.map((beer, index) =>
          <BeerItem name={beer.name}
            brewer={beer.brewer}
            description={beer.description}
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
        margin-top:40px;
        }
        h2{
          font-size: 3rem;
          padding-left: 30px;
          color: #FFF;
        }
        .beers{
          max-width: 1200px;
          margin: 40px auto 100px;
          padding-left: 30px;
        }
        .on-tap{
          background-color: #E48F3B;
          text-align: center;
          padding: 30px;
        }
          `}</style>
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
}

export default BeerList;
