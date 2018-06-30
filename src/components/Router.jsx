import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsTickerList from './NewsTickerList';
import BeerList from './BeerList';
import About from './About';



function Router(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={BeerList} />
        <Route path='/newsTicker' component={NewsTickerList} />
        <Route path='/about' component={About}/>

      </Switch>
    </div>
  );
}

export default Router;
