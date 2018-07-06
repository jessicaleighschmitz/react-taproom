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
      <div className="button-flex">
        <button type="button"><Link style={{textDecoration: 'none', color: '#fff'}} to="/AddBeerForm">Add Beer</Link></button>
      </div>
      <style jsx>{`
          button{
            width: 150px;
            height: 40px;
            background-color: #E48F3B;
            font-size: 1.2rem;
            border-radius: 6px;
            margin: 0 auto 90px;
          }
          .button-flex{
            display: flex;
            justify-content: center;
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
