import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddressInfo extends Component {
    state = {
        userName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
    }

    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    // axios, post data came in request

    postUserInfo = (event) =>{
      event.preventDefault();
        // <Link to="/placedOrder"></Link>
    }
  render() {
    return (
      <div className="checkoutBox">
        <form onSubmit={this.postUserInfo.bind(this)}>
            <input type="text" name="username" value={this.state.userInfo} placeholder="Username" className="inputcss" onChange={this.onChange}/><br/>
            <input type="text" name="email" value={this.state.userInfo} placeholder="Email" className="inputcss" onChange={this.onChange}/>
            <h3>Shipping Information</h3>
            <textarea type="text" name="address" value={this.props.userInfo} placeholder="Address" className="address"/><br/>
            <input type="text" name="city" value={this.props.userInfo} placeholder="City" className="inputcss"/><br/>
            <input type="text" name="state" value={this.props.userInfo} placeholder="State" className="inputcss"/><br/>
            <input type="text" name="zipcode" value={this.props.userInfo} placeholder="Zip code" className="inputcss"/><br/>
            <button type="submit" className="inputcss">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default AddressInfo;