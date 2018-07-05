import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsTickerList from './NewsTickerList';
import BeerList from './BeerList';
import About from './About';
import Header from './Header';
import Footer from './Footer';

import AddBeerForm from './AddBeerForm';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state= {
      masterBeerList: [
        {
          name: 'Ruby Zozzle',
          brewer: 'Hi-Wheel',
          description: 'Sparkling Wine & Grapefruit',
          abv: '6.8%',
          price: '7',
          remaining: '20'
        },
        {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          remaining: '60'
        },
        {
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7%',
          price: '3',
          remaining: '65'
        },
        {
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv:  '5.9%',
          price: '6',
          remaining: '75'
        },
        {
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv:  '7.5%',
          price: '6',
          remaining: '18'
        },
        {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv:  '5.5%',
          price: '6',
          remaining: '58'
        }
      ]
    };
    this.handleAddNewBeerToList = this.handleAddNewBeerToList.bind(this);
  }


  handleAddNewBeerToList(newBeer){
    let newBeerListItem = this.state.masterBeerList.slice();
    newBeerListItem.push(newBeer);
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
