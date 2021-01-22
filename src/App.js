import React, { Component } from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : [
        {
            title : 'Watch',
            price : 1000,
            qty : 1,
            img : 'https://www.aponzone.com/image/cache/data/watch/curren-8321-quartz-01-watch-aponzone-600x540.jpg',
            id : 1
        },
        {
            title : 'Phone',
            price : 9000,
            qty : 1,
            img : 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            id : 2
        },
        {
            title : 'Laptop',
            price : 50000,
            qty : 1,
            img : 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id : 3
        }
    ]
    }
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