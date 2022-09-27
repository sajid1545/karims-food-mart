import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Shop.css';
import Swal from 'sweetalert2';
import { addToDb, getStoredCart } from '../../Utilities/localStorage';
import { ToastContainer, toast } from 'react-toastify';


const Shop = () => {
	const [meals, setMeals] = useState([]);

	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
			.then((response) => response.json())
			.then((data) => setMeals(data.meals));
	}, []);

	useEffect(() => {
		let savedCart = [];
		let storedCart = getStoredCart();
		if (storedCart) {
			for (const id in storedCart) {
				let storedMeal = meals.find((meal) => meal.idMeal === id);
				if (storedMeal) {
					savedCart.push(storedMeal);
				}
			}
			setCart(savedCart);
		}
	}, [meals]);

	const handleAddToCart = (selectedMeal) => {
		if (cart.length < 5) {
			let newCart = [];

			let exist = cart.find((meal) => meal.idMeal === selectedMeal.idMeal);
			
			if (!exist) {
				newCart = [...cart, selectedMeal];
				addToDb(selectedMeal.idMeal);
				setCart(newCart);
            } else {
                toast("Same meal already added to cart")
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Cant add the same meal twice to the cart',
				});
				return;
			}
        } else {
            toast("You have already selected 5 meals")
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Cant add more than 5 meals',
			});
			return;
		}
	};

	const handleClear = () => {
		Swal.fire(
			'Good job!',
			'Local Storage is Empty now !👌👌👌',
		  )
		localStorage.removeItem('meal-cart');
		setCart([])
	}

	return (
		<div className="shop">
			<div className="meal-container">
				{meals.map((meal) => (
					<Meal handleAddToCart={handleAddToCart} key={meal.idMeal} meal={meal} />
				))}
			</div>

			<div className="cart-container">
			<Cart cart={cart} handleClear = {handleClear} />
            </div>
            <ToastContainer />
		</div>
	);
};

export default Shop;
