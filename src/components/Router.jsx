import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ShoeList from './ShoeList';
import AboutUs from './AboutUs';

function Router(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={ShoeList} />
        <Route path='/aboutUs' component={AboutUs} />
      </Switch>
    </div>
  );
}

export default Router;
