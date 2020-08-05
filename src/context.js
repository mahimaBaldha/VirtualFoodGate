import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();


export class Provider extends Component {
  state = {
    food_list : [
        {
            "id": 1,
            "name": "Lasagna",
            "img": "https://natashaskitchen.com/wp-content/uploads/2018/12/Lasagna-Recipe-3-600x900.jpg",
            "price": 490,
            "created_at": "2020-08-04T10:40:38.975017Z"
        },
        {
            "id": 2,
            "name": "White Forest Cake",
            "img": "https://img.floweraura.com/sites/default/files/Re-Shoot-Cake-11-A.jpg",
            "price": 500,
            "created_at": "2020-08-04T10:41:14.973506Z"
        },
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
        },
        {
          "id": 4,
          "name": "Veg cannelloni",
          "img": "https://media.lacucinaitaliana.com/photos/5e8c8e8a7dd21300081d44eb/2:1/w_1200,c_limit/cannelloni%20di%20magro.jpg",
          "price": 420,
          "created_at": "2020-08-04T10:42:19.981515Z"
      }
    ]
};

//   componentDidMount() {
//     // console.log(this.state);
//     axios.get(`https://surveybyhv.herokuapp.com/survey/`)
//       .then(res => {
//         console.log("api data",res);
//         // this.setState({ food_list: res.data });
//       })
//       .catch(error => console.log(error));
//   }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;