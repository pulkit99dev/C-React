import React from 'react';
import Cart from './Cart';

class CartItem extends React.Component{

    render(){
        const {title, price, qty} = this.props.product;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style= {styles.image} />
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
                        onClick={() => this.props.increaseQty(this.props.product)} />
                        <img alt='decrease' 
                        className='action-icons' 
                        src='https://www.flaticon.com/svg/vstatic/svg/929/929430.svg?token=exp=1611161411~hmac=521277cdd86d635b08ee773e483f62d9' 
                        onClick={() => this.props.decreaseQty(this.props.product)} />
                        <img alt='delete' 
                        className='action-icons' 
                        src='https://www.flaticon.com/svg/vstatic/svg/458/458594.svg?token=exp=1611161533~hmac=c80830e9739641767c51306b37fb89ca' />
                    </div>
                </div>
            </div>
        )
    }
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

export default CartItem