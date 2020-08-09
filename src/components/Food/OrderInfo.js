 import React from 'react';

function OrderInfo(props) {
    const {cartDetails} = props.props;
    const cartTotal = cartDetails.reduce((totalPrice, item) => totalPrice + item.price, 0);
  return (
    <div className="checkoutBox">
        <h3>Your Order</h3>
            <hr/>
        <div className="orderdetailsBox">
            <div>
                <span>Product</span>
                <span>Price</span>
            </div>
            
            <hr/>
            {cartDetails.map(item => (
                <div style={{marginTop:"3%"}}>
                    <span key={item.id}>{item.name}</span>
                    <span key={item.id}>{item.price}</span>
                </div>)
            )}
            <br/>
            <hr/>
            <div>
                <span>Total</span>
                <span>{cartTotal}</span>
            </div>
        </div>
    </div>
  );
}
export default OrderInfo;