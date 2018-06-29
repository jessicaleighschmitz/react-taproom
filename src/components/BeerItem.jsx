import React from 'react';
import PropTypes from "prop-types";

function BeerItem (props) {
  return (
    <div className="beer-item">
      <p className="beer-name"><strong>{props.name}</strong></p>
      <p className="brewery">{props.brewer}</p>
      <p className="abv">{props.abv}</p>
      <p className="price">${props.price}</p>
      <p className="remaining">{props.remaining}oz.</p>

    </div>
  );
}

BeerItem.PropTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
}

export default BeerItem;
