import React from 'react';
import PropTypes from 'prop-types';
import BeerList from './BeerList';
import { Link } from 'react-router-dom';
import BannerImg from './BannerImg';

function Admin (props){
  return(
    <div>
      <BannerImg/>
      <BeerList
        beerList={props.beerList}
        currentRouterPath={props.currentRouterPath} />
      <button type="button"><Link to="/AddBeerForm">Add Beer</Link></button>
    </div>
  );
}

Admin.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
