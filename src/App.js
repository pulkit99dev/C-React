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
            img : '',
            id : 1
        },
        {
            title : 'Phone',
            price : 9000,
            qty : 1,
            img : '',
            id : 2
        },
        {
            title : 'Laptop',
            price : 50000,
            qty : 1,
            img : '',
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
          />
        </div>
      );
    }
  }

export default App;