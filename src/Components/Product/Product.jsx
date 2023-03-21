
import React from 'react';
import './product.css';
const Product = (props) => {
    // console.log(props)
    const {name,img,seller,price,ratings}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p>Seller:{seller}</p>
            <p>{ratings}</p>
            <p>Price:${price}</p>
           </div>
           
          <div>
          <button className='cart-btn' onClick={()=>props.handelAddToCart(props.product)}>Add To Cart</button>
          
          </div>

        </div>
    );
};

export default Product;