import React from 'react';
import PropTypes from 'prop-types';
import BeerList from './BeerList';
import { Link } from 'react-router-dom';

function Admin (props){
  return(
    <div>
      <BeerList
        beerList={props.beerList}
        currentRouterPath={props.currentRouterPath} />
      <button type="button"><Link style={{textDecoration: "none", color: "#E48F3B"}} to="/AddBeerForm">Add Beer</Link></button>
      <style jsx>{`
          button{
            width: 150px;
            height: 40px;
            border: 2px solid #E48F3B;
            font-size: 1.2rem;
            border-radius: 6px;
            margin: 0 auto 30px;
          }
            `}</style>
    </div>
  );
}

Admin.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
