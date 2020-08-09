import React from 'react';

function CartItem(props) {
    const {cartitem} = props
  return (
    <div className="cartColumn">
        <table>
            <tr>
                <td><img src={cartitem.img} className="cartImage" alt="Food"></img></td>
                <td>{cartitem.name}</td>
                <td>{cartitem.price}</td>
                {/* <td>{cartitem.name}</td> */}
            </tr>
        </table>
    </div>
  );
}
export default CartItem;