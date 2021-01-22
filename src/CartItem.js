import React from 'react';
import Cart from './Cart';

const CartItem =(props) => {
        const {title, price, qty} = props.product;
        const { product, increaseQty, decreaseQty, deleteItem, amount} = props;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style= {styles.image} src={product.img}/>
                </div>
                <div className='right-block'>
                    <div style={ {fontSize : 25} }>{title}</div>
                    <div style={ {color : 'red'} }>₹{price}</div>
                    <div style={ {color :'green'} }>Qty : {qty}</div>
                    <div className= 'cart-item-actions'>
                        {/* Buttons */}
                        <img alt='increase' 
                        className='action-icons' 
                        src='https://www.flaticon.com/svg/vstatic/svg/929/929409.svg?token=exp=1611161468~hmac=e9948e3c1a027a9bdfe687f27b1eb861' 
                        onClick={() => increaseQty(product)} />
                        <img alt='decrease' 
                        className='action-icons' 
                        src='https://www.flaticon.com/svg/vstatic/svg/929/929430.svg?token=exp=1611161411~hmac=521277cdd86d635b08ee773e483f62d9' 
                        onClick={() => decreaseQty(product)} />
                        <img alt='delete' 
                        className='action-icons' 
                        src='https://www.flaticon.com/svg/vstatic/svg/458/458594.svg?token=exp=1611161533~hmac=c80830e9739641767c51306b37fb89ca'
                        onClick={() => deleteItem(product.id)} />
                    </div>
                </div>
            </div>
        )
    }


const styles = {
    image:{
        height : 110,
        width : 110,
        borderRadius : 4,
        border : 'solid',
        background : '#ccc'
    }
}

export default CartItem;