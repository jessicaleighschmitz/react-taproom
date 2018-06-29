import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return(
    <div>
      <p><Link to='/newsTicker'>Craft Brew News</Link></p>
    </div>
  );
}

export default Header;
