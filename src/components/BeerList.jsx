import React from 'react';
import BeerItem from './BeerItem';
import PropTypes from 'prop-types';
import banner from '../assets/img/banner.jpg';
import BannerImg from './BannerImg';

function BeerList(props) {
  return (
    <div>
      <BannerImg/>
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
            currentRouterPath={props.currentRouterPath}
            key={index}/>
        )}
      </div>

      <style jsx>{`

        h2{
          font-size: 3rem;
          padding-left: 30px;
          color: #FFF;
        }
        .beers{
          max-width: 1200px;
          margin: 40px auto 50px;
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
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default BeerList;
