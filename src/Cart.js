import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products : [
            {
                title : 'Watch',
                price : 1000,
                qty : 1,
                img : ''
            },
            {
                title : 'Phone',
                price : 9000,
                qty : 1,
                img : ''
            },
            {
                title : 'Laptop',
                price : 50000,
                qty : 1,
                img : ''
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
        {if (products.qty === 0) {
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products : products
        })
    }
    }

    render(){
        const {products} = this.state;
        return(
            <div className='cart'>
                {products.map((product) =>{
                   return <CartItem product={product} key={product.id} increaseQty={this.handleIncreaseQty} decreaseQty={this.handleDecreaseQty} />
                })}
            </div>
        )
    }
}
    
export default Cart;