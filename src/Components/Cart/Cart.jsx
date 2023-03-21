import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {

    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity + product.quantity;
        total=parseInt(total + product.price*product.quantity);
        shipping=parseInt(shipping + product.shipping);

    }
    const tax=total*10/100;
   const grandTotal=total + shipping + tax;
    
    return (
        <div className='cart-info'>
             <h3>Order Sumarry</h3>
            <p>Selected Item:{quantity}</p>
            <p>Total-Price:$ {total}</p>
            <p>Total-Shapping:$ {shipping}</p>
            <p>Tax: $ {tax}</p>
            <p>Grand-Total:${grandTotal}</p>
            <div className='summary-btn'>
                <button>Clear Cart</button>
                <button>Review Cart</button>
            </div>
        </div>
    );
};

export default Cart;