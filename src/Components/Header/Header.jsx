import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';
const Header = () => {
    return (
       <nav>
         <div className='header'>
           <div>
            <img src={logo} alt="" />
           </div>
           <div className='Header-link'>
            <a href="">Home</a>
            <a href="">Order</a>
            <a href=""> Order Review</a>
            <a href="">Manage Inventory</a>
           </div>
        </div>
       </nav>
    );
};

export default Header;