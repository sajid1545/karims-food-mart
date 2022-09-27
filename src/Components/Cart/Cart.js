import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleClear }) => {
	return (
		<div className="cart">
			<h1>Order Overview</h1>
			<h3>Total Meals Selected : {cart.length} </h3>
			<h3>
				{cart.map((meal) => (
					<div key={meal.idMeal} className="cart-items">
						<li>{meal.strMeal}</li>
					</div>
				))}
			</h3>
			<button className="btn-delete" onClick={handleClear}>
				<FontAwesomeIcon icon={faTrash} className="icon" />
			</button>
		</div>
	);
};

export default Cart;
