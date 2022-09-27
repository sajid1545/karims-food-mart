import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='head'>
            <h1 className='head-title'>Karims Food Mart</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/food">Food</a>
                <a href="/categories">Categories</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;