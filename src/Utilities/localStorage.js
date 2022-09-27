const addToDb = (id) => {
	let mealCart = {};

	let storedCart = localStorage.getItem('meal-cart');
	if (storedCart) {
		mealCart = JSON.parse(storedCart);
	}

	let quantity = mealCart[id];
	if (quantity) {
		mealCart[id] = quantity + 1;
		localStorage.setItem('meal-cart', JSON.stringify(mealCart));
	} else {
		mealCart[id] = 1;
		localStorage.setItem('meal-cart', JSON.stringify(mealCart));
	}
};

const getStoredCart = () => {
	let mealCart = {};

	let storedCart = localStorage.getItem('meal-cart');
	if (storedCart) {
		mealCart = JSON.parse(storedCart);
	}
	return mealCart;
};

export { addToDb, getStoredCart };

