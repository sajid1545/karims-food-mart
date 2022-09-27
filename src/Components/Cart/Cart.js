import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    

    
    return (
        <div className='cart'>
            <h1>Order Overview</h1>
            <h3>Total Meals Selected : {cart.length} </h3>
            <h3>Name : { 
                cart.map(meal => <li key={meal.idMeal}>{ meal.strMeal }</li>)
             }</h3>
        </div>
    );
};

export default Cart;