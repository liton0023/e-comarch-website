import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
console.log(cart)
    let total=0;
    let shipping=0;
    for(const product of cart){
        total=parseInt(total + product.price);
        shipping=parseInt(shipping + product.shipping);

    }
    const tax=total*10/100;
   const grandTotal=total + shipping + tax;
    
    return (
        <div className='cart-info'>
             <h3>Order Sumarry</h3>
            <p>Selected Item:{cart.length}</p>
            <p>Total-Price:$ {total}</p>
            <p>Total-Shapping:$ {shipping}</p>
            <p>Tax: $ {tax}</p>
            <h3>Grand-Total:${grandTotal}</h3>
            <div className='summary-btn'>
                <button>Clear Cart</button>
                <button>Review Cart</button>
            </div>
        </div>
    );
};

export default Cart;