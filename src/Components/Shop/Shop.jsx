import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {

    const [products,setProducts]=useState([])

    const handelAddToCart=(product)=>{
    //    console.log(product)
    console.log('click',product)
    }

useEffect(()=>{
    fetch('products.JSON')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

    return (
        <div className='shop-container'>
            <div className='container'>
            {
                products.map(product=><Product key={product.key} product={product} handelAddToCart={handelAddToCart}></Product>)
            }
        </div>
        <div className='cart-container'>
            <h3>Order Sumarry</h3>
        </div>
        </div>
    );
};

export default Shop;