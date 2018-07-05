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
  }


  return(
    <div>
      <form onSubmit={handleNewBeerSubmission}>
        <input type="text" id='beerName' placeholder="Beer Name" ref={(input) => {_beerName = input;}}/>
        <input type="text" id='brewery' placeholder="Brewery" ref={(input) => {_brewery = input;}}/>
        <input type="text" id='description' placeholder="Beer Style" ref={(input) => {_description = input;}}/>
        <input type="text" id='abv' placeholder="ABV" ref={(input) => {_abv = input;}}/>
        <input type="text" id='price' placeholder="Price per beer" ref={(input) => {_price = input;}}/>
        <button type='submit' onClick={handleNewBeerSubmission}>Add</button>
      </form>
    </div>
  );
}

AddBeerForm.propTypes = {
  onAddNewBeerToList: PropTypes.func
};

export default AddBeerForm;
