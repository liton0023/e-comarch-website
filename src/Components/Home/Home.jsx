import React from 'react';
import photo from '../../assets/images/photo.jpg';
import './Home.css';
const Home = () => {
    return (
        <div className='home-page'>
           <div className='home-blog'>
           <p>Safe Up To 70% Off</p>
           <h3>New Collection For All</h3>
           <h5>Discover All The New Arivels Of Ready To-Wear Collection</h5>
           <button className='btn'>Shop Now</button>
           </div>
           <div className='img-section'>
            <img src={photo} alt="" />
           </div>
        </div>
    );
};

export default Home;