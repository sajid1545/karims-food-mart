import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Shop.css';
import Swal from 'sweetalert2';
import { addToDb, getStoredCart } from '../../Utilities/localStorage';

const Shop = () => {
	const [meals, setMeals] = useState([]);

	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
			.then((response) => response.json())
			.then((data) => setMeals(data.meals));
    }, []);
    

    useEffect(() => {
        let savedCart = []
        let storedCart = getStoredCart();
        if (storedCart) { 
            for (const id in storedCart) {
                let storedMeal = meals.find(meal => meal.idMeal === id);
                if (storedMeal) { 
                    savedCart.push(storedMeal);
                }
            }
            setCart(savedCart);
        }
    },[meals])



	const handleAddToCart = (selectedMeal) => {
		let newCart = [...cart, selectedMeal];

		let exist = cart.find((meal) => meal.idMeal === selectedMeal.idMeal);
		console.log(exist);
		if (!exist) {
            newCart = [...cart, selectedMeal];
            addToDb(selectedMeal.idMeal)
			setCart(newCart);
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Cant add the same meal twice to the cart',
				
			});
			return;
		}
	};

	return (
		<div className="shop">
			<div className="meal-container">
				{meals.map((meal) => (
					<Meal handleAddToCart={handleAddToCart} key={meal.idMeal} meal={meal} />
				))}
			</div>

			<div className="cart-container">
				<Cart cart={cart} />
			</div>
		</div>
	);
};

export default Shop;
