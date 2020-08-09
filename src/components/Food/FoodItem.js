import React, { Component } from 'react';

class FoodItem extends Component {
    state = {
        text: "Add to Cart",
        addedTocart: false
      }
    // const {fooditem} = props;
      
    addToCart = (text) => {
        if(text === "Add to Cart"){
            this.setState(
                { 
                    text: "Added to Cart",
                });
        }else{
            this.setState(
                { 
                    text: "Add to Cart",
                });
        }
    } 

  render() {
    const {fooditem} = this.props;
    return (
        <div className="columBox">
        <div className="rowBox">
            {console.log(fooditem)}
            <img src={fooditem.img} className="img" alt="Food"></img>
            <div style={{"marginTop": "10px"}}>
                <strong>{fooditem.name}{" "}</strong>
                <span style={{"float":"right"}}>{fooditem.price}</span>
            </div>
            <button type="submit" className="addCartBtn" onClick={ this.addToCart.bind(this, this.state.text)}>{this.state.text}</button>
        </div>
    </div>
    );
  }
}
export default FoodItem;