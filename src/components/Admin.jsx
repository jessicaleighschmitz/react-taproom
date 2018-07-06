import React from 'react';
import PropTypes from 'prop-types';
import BeerList from './BeerList';

function Admin (props){
  return(
    <div>
      <div>yoooo</div>
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
