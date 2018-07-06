import React from 'react';
import PropTypes from 'prop-types';

function AddBeerForm (props){
  let _beerName = null;
  let _brewery = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = 1980;


  function handleNewBeerSubmission(event){
    event.preventDefault();
    props.onAddNewBeerToList({name: _beerName.value, brewer: _brewery.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining});
    _beerName.value = '';
    _brewery.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
  }


  return(
    <div className="outer">
      <h2>Tap new beer</h2>
      <div className="inner">
        <form onSubmit={handleNewBeerSubmission}>
          <input type="text" id='beerName' placeholder="Beer Name" ref={(input) => {_beerName = input;}}/>
          <input type="text" id='brewery' placeholder="Brewery" ref={(input) => {_brewery = input;}}/>
          <input type="text" id='description' placeholder="Beer Style" ref={(input) => {_description = input;}}/>
          <input type="text" id='abv' placeholder="ABV" ref={(input) => {_abv = input;}}/>
          <input type="text" id='price' placeholder="Price per beer" ref={(input) => {_price = input;}}/>
          <button type='submit' onClick={handleNewBeerSubmission}>Add</button>
        </form>
    </div>
      <style jsx>{`
          #beerName, #brewery, #description{
            width: 250px;
          }
          input{
            margin: 20px;
            height: 30px;
            font-size: 1.15rem;
            border: 1px solid black;
          }
          input::placeholder{
            padding-left: 8px;
          }
          .inner{
            border: 3px solid black;
            margin: 50px;
          }
          button{
            width: 150px;
            height: 40px;
            background-color: #E48F3B;
            font-size: 1.2rem;
            border-radius: 6px;
            display: block;
            margin: 10px 20px 20px;
            color: #fff;
          }
          h2{
            font-size: 2.1rem;
            margin: 50px;
            text-transform: uppercase;
          }
            `}</style>
    </div>
  );
}

AddBeerForm.propTypes = {
  onAddNewBeerToList: PropTypes.func
};

export default AddBeerForm;
