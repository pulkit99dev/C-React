import React, { Component } from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : [],
        loading : true
    }
    this.db = firebase.firestore();
}

// componentDidMount() {
//   firebase
//     .firestore()
//     .collection('products')
//     .get()
//     .then((snapshot) => {
//         console.log(snapshot);
//         snapshot.docs.map((doc) =>{
//           console.log(doc.data());

//           doc.data['id'] = doc.id;
//           return doc.data();
//         });
//         const products = snapshot.docs.map((doc) => {
//           return doc.data();
//         })
//         this.setState({
//           products,
//           loading: false
//         })
//     }
//     )
// }

componentDidMount() {
  this.db
    .collection('products')
    // .where('price', '==', 9999)
    .orderBy('price', 'asc')
    .onSnapshot((snapshot) => {
      console.log(snapshot);
        snapshot.docs.map((doc) =>{
          console.log(doc.data());

          
        });
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products,
          loading: false
        })
    })
}

handleIncreaseQty = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        
        // products[index].qty += 1;
        // this.setState({
        //     products : products
// })
        const docRef = this.db.collection('products').doc(products[index].id);
        docRef
          .update({
            qty: products[index].qty + 1
          })
          .then(() => {
            console.log('Updated Successfully');
          })
          .catch((error)=>{
            console.log(error);
          })

}

handleDecreaseQty = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
        return;
    }
    // products[index].qty -= 1;
    // this.setState({
    //     products : products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(()=>{
        console.log('Updated Successfully');
      })
      .catch((error)=>{
        console.log(error);
      })
}

handleDeleteProduct = (id) =>{
    const {products} = this.state;

    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //     products : items
    // })

    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(()=>{
        console.log('Deleted Successfully');
      })
      .catch((error)=>{
        console.log(error);
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

  addProduct =() =>{
    this.db
    .collection('products')
    .add({
      img : '',
      qty: 19,
      title : 'Bottle',
      price : 1000
    })
    .then((docRef) => {
      console.log('New Product is', docRef)
    })
    .catch((error) => {
      console.log('Error is ', error);
    })
  }

    render () {
      const {products, loading} = this.state;
      return (
        <div className="App">
          <Navbar count={this.getCartCount()} />
          <h1>Cart</h1>
          <button onClick={this.addProduct}>Add a product</button>
          <Cart  
             products = {products}
             increaseQty={this.handleIncreaseQty} 
             decreaseQty={this.handleDecreaseQty} 
             deleteItem={this.handleDeleteProduct}
             amount={this.getTotalAmt}
          />
          {loading && <h1>Loading....</h1>}
          <h3>Total Amount = {this.getTotalAmt()}</h3>
        </div>
      );
    }
  }

export default App;