import React from 'react';

function FoodItem(props) {
    const {fooditem} = props;

  return (
        <div className="columBox">
            <div className="rowBox">
                <div className="imgbox"><img src={fooditem.img} className="img"></img></div>
                <div style={{"marginTop": "10px"}}>
                    <strong>{fooditem.name}{" "}</strong>
                    <span style={{"float":"right"}}>{fooditem.price}</span>
                </div>
            </div>
        </div>
  );
}

export default FoodItem;