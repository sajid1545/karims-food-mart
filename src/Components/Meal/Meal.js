import React from 'react';
import './Meal.css';
import "aos/dist/aos.css";


const Meal = ({ meal,handleAddToCart }) => {
	const { idMeal, strMeal, strCategory, strMealThumb } = meal;
	
	return (
		<div className="meal" data-aos="zoom-in">
			<img src={strMealThumb} alt="" />
			<div className='meal-info'>
				<h3>Name : {strMeal}</h3>
				<p>ID : {idMeal} </p>
				<p>Category : {strCategory}</p>
			</div>
			<button onClick={()=>handleAddToCart(meal)} className="btn-cart">
				<p>Add To Cart</p>
			</button>
		</div>
	);
};

export default Meal;
