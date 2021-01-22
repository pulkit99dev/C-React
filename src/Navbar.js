import React from 'react';
import Cart from './Cart';

const Navbar = (props) => {
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src='https://www.flaticon.com/svg/vstatic/svg/3515/3515271.svg?token=exp=1611253233~hmac=7743d3c1d4dfeb2dc23e22efea0871c8' alt='Cart-icon' />
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        )
    }

const styles = {
    cartIcon : {
        height : 32,
        marginRight: 20
    },
    nav:{
        height: 70,
        background : '#4267b2',
        display : 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount:{
        background: 'darkYellow',
        borderRadius : '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};

export default Navbar;