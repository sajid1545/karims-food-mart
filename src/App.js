import AOS from 'aos';
import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div>
			<Header />
			<Shop />
		</div>
	);
}

export default App;
