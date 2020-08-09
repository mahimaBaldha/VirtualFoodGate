import React, { Component } from 'react';
import CartItem from './CartItem'
import { Link } from 'react-router-dom';

class Cart extends Component {
    state= {
        cart_list:[
            // {
            //     "id": 1,
            //     "name": "Lasagna",
            //     "img": "https://natashaskitchen.com/wp-content/uploads/2018/12/Lasagna-Recipe-3-600x900.jpg",
            //     "price": 490,
            //     "created_at": "2020-08-04T10:40:38.975017Z"
            // },
            // {
            //     "id": 2,
            //     "name": "White Forest Cake",
            //     "img": "https://img.floweraura.com/sites/default/files/Re-Shoot-Cake-11-A.jpg",
            //     "price": 500,
            //     "created_at": "2020-08-04T10:41:14.973506Z"
            // },
            {
                "id": 3,
                "name": "Ferrero Rocher Cake",
                "img": "https://i7.fnp.com/images/pr/uae/l/v19700101053000/eggless-ferrero-rocher-cake_1.jpg",
                "price": 700,
                "created_at": "2020-08-04T10:41:43.280679Z"
            },
            {
                "id": 4,
                "name": "Red velvet cake",
                "img": "https://assets.epicurious.com/photos/56bcc39c2388d8216df80735/master/w_2000,h_1334,c_limit/shutterstock_365627156.jpg",
                "price": 2300,
                "created_at": "2020-08-04T10:42:19.981515Z"
            }
        ]
    }

  render() {
    const {cart_list} = this.state;
    const cartTotal = cart_list.reduce((totalPrice, item) => totalPrice + item.price, 0);
    return (
        <React.Fragment>
            <div className="cartItem">
                <table className="cartColumnheading">
                    <tr>
                        <td>Product</td>
                        <td>Name</td>
                        <td>Price</td>
                        {/* <td>Total</td> */}
                    </tr>
                </table>
                <hr/>
                {cart_list.map(item => (
                    <CartItem key={item.id} cartitem={item}/>)
                )}
                <hr/>
                <span style={{marginLeft:"80%"}}>{cartTotal}</span>
                <hr/>
                <div style={{marginTop:"4%", textAlign:"center"}}>
                    <Link to="/" className="continue">CONTINUE ADDING ITEMS</Link>{" "}
                    <Link to={{
                        pathname: "/cart/checkout",
                         state: {
                             cartDetails : cart_list
                         }
                        }}
                        className="continue"
                        style={{marginLeft:"11%"}}>PROCEED TO CHECKOUT</Link>
                </div>
                
            </div>
      </React.Fragment>
    );
  }
}

export default Cart;