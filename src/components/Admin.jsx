import React from 'react';
import PropTypes from 'prop-types';
import BeerList from './BeerList';
import { Link } from 'react-router-dom';

function Admin (props){
  return(
    <div>
      <div>yoooo</div>
      <button type="button"><Link to="/AddBeerForm">Add Beer</Link></button>
      <BeerList
        beerList={props.beerList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
}

export default Admin;
