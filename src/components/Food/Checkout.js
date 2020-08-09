import React from 'react';
import OrderInfo from './OrderInfo';
import AddressInfo from './AddressInfo';

function Checkout(props){
    const {state} = props.location
    console.log(props)
    return (
        <React.Fragment>
            <OrderInfo props={state}/>
            <AddressInfo/>
        </React.Fragment>
      );
}
export default Checkout;