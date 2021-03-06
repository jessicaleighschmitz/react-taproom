import React from 'react';
import PropTypes from 'prop-types';

function BeerItem (props) {
  const beerInfo =
    <div className="beer-item">
      <div className="beers-left">
        <p className="beer-name"><strong>{props.name}</strong></p>
        <p className="brewery">{props.brewer}</p>
        <p className="style">{props.description}</p>
      </div>
      <div className="beers-right">
        <p className="abv"><span className="text-bold">abv: </span>{props.abv}</p>
        <p className="price">${props.price}</p>
        <p className="remaining"><span className="text-bold">Pours left:</span> {props.remaining}</p>
      </div>
      <style jsx>{`
          .beer-item{
            border: 3px solid #E48F3B;
            max-width: 500px;
            display: flex;
            justify-content: space-between;
            padding-left: 30px;
            padding-right: 30px;
            margin: 0 auto;
          }
          .beers-right{
            padding-top: 40px;
          }
          .beer-name{
            font-size: 1.8rem;
          }
          .brewery{
            font-weight: bold;
            font-size: 1.2rem;
            color: #E48F3B;
            text-transform: uppercase;
          }
          .text-bold{
            font-weight: bold;
            font-size: 1.2rem;
          }
            `}
      </style>
    </div>;
  if (props.currentRouterPath ==='./admin'){
    return (
      <div onClick={() => {alert('hey cutie,' + props.name);}}>
        {beerInfo}
      </div>
    );
  } else {
    return (
      <div>
        {beerInfo}
      </div>
    );
  }
}

BeerItem.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default BeerItem;
