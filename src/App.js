import React, { Component } from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : []
    }
}

componentDidMount() {
  firebase
    .firestore()
    .collection('products')
}

handleIncreaseQty = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        
        products[index].qty += 1;
        this.setState({
            products : products
        })
}

handleDecreaseQty = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products : products
    })
}

handleDeleteProduct = (id) =>{
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);
    this.setState({
        products : items
    })
}

  getCartCount=()=>{
    const {products} = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getTotalAmt =() =>{
    const {products} = this.state;

    let amount = 0;

    products.map((product)=>{
      amount = amount + product.qty * product.price
    });

    return amount;
  }

    render () {
      const {products} = this.state;
      return (
        <div className="App">
          <Navbar count={this.getCartCount()} />
          <h1>Cart</h1>
          <Cart  
             products = {products}
             increaseQty={this.handleIncreaseQty} 
             decreaseQty={this.handleDecreaseQty} 
             deleteItem={this.handleDeleteProduct}
             amount={this.getTotalAmt}
          />
          <h3>Total Amount = {this.getTotalAmt()}</h3>
        </div>
      );
    }
  }

export default App;