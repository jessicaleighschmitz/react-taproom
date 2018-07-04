import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsTickerList from './NewsTickerList';
import BeerList from './BeerList';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import kegList from './BeerData';
import AddBeerForm from './AddBeerForm';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state= {
      masterBeerList: kegList
    };
    this.handleAddNewBeerToList = this.handleAddNewBeerToList.bind(this);
  }

  handleAddNewBeerToList(newBeer){
    let newBeerListItem = this.state.masterBeerList.slice();
    newBeerListItem.unshift(newBeer);
    this.setState({masterBeerList: newBeerListItem});
  }



  render(){
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/' render={()=><BeerList beerList={this.state.masterBeerList} />} />
            <Route path='/newsTicker' component={NewsTickerList} />
            <Route path='/about' component={About}/>
            <Route path='/addbeerform' render={()=><AddBeerForm onAddNewBeerToList={this.handleAddNewBeerToList} />} />
          </Switch>
        <Footer />

        <style jsx>{`

            `}</style>
        </div>
      );
  }
}

export default App;
