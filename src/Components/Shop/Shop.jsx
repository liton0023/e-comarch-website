import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../assets/utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {

    const [products,setProducts]=useState([])
const [cart,setCart]=useState([])

    const handelAddToCart=(selectedProduct)=>{
        let newCart=[];
        const exists=cart.find(product=> product.key === selectedProduct.key)
        if(!exists){
            selectedProduct.quantity=1;
             newCart=[...cart,selectedProduct];
        }
        else{
            const rest=cart.filter(product=> product.key !== selectedProduct.key)
            exists.quantity=exists.quantity + 1;
            newCart=[...rest , exists];
        }
   
    setCart(newCart);
    addToDb(selectedProduct.key)
    }

    useEffect(()=>{
        const storeCart=getStoredCart();
        const savedCart=[];
       for(const key in storeCart){
        const addedProduct=products.find(product=>product.key==key);
        if(addedProduct){
            const quentity=storeCart[key];
            addedProduct.quantity=quentity
            savedCart.push(addedProduct);
        }
        
       }
       setCart(savedCart);
    },[products])

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