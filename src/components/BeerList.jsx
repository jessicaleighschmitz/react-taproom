import React from 'react';
import BeerItem from './BeerItem';
import kegList from './BeerData';

function BeerList() {
  return (
    <div>
      <h2>On Tap</h2>
      <div className="beers">
        {kegList.map((beer, index) =>
          <BeerItem name={beer.name}
            brewer={beer.brewer}
            abv={beer.abv}
            price={beer.price}
            remaining={beer.remaining}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default BeerList;
