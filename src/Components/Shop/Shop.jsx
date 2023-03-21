import React, { useEffect, useState } from 'react';
import { addToDb } from '../../assets/utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {

    const [products,setProducts]=useState([])
const [cart,setCart]=useState([])
    const handelAddToCart=(product)=>{
    const newCart=[...cart,product];
    setCart(newCart);
    addToDb(product.key)
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
           <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;