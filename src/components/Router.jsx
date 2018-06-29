import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsTickerList from './NewsTickerList';
import BeerList from './BeerList';



function Router(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={BeerList} />
        <Route path='/newsTicker' component={NewsTickerList} />
        
      </Switch>
    </div>
  );
}

export default Router;
