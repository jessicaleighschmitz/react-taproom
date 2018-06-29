import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsTickerList from './NewsTickerList';
import BeerList from './BeerList';
import Error404 from './Error404';


function Router(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={BeerList} />
        <Route path='/newsTicker' component={NewsTickerList} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default Router;
