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
    render(){
        const {products} = this.state;
        return(
            <div className='cart'>
                {products.map((product) =>{
                   return <CartItem product={product} key={product.id} />
                })}
            </div>
        )
    }
}
    
export default Cart;