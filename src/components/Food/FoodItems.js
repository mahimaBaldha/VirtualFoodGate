import React, { Component } from 'react';
import { Consumer } from '../../context';
// import axios from 'axios';
import FoodItem from './FoodItem'

class FoodItems extends Component {
  render() {
    return (
      <Consumer>
        {value => {
            // console.log(value);
            const {food_list} = value
            return(
            <React.Fragment>
                <div className="fooditemsDiv">
                    {food_list.map(item => (
                        // console.log(item.name)
                        <FoodItem key={item.id} fooditem={item} />
                    ))}
                </div>
            </React.Fragment>);
        }}
      </Consumer>
    );
  }
}

export default FoodItems;