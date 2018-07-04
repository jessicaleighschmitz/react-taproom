import React from 'react';
import Router from './Router';
import Header from './Header';
import Footer from './Footer';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state= {
      masterBeerList: []
    };
  }
  render(){
    return (
      <div>
        <Header />
        <Router />
        <Footer />

        <style jsx>{`

            `}</style>
        </div>
      );
  }
}

export default App;
