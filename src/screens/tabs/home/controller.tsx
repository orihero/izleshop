import React, { useEffect, useState } from 'react';
import { paddingVertical, windowWidth } from 'constants/sizes';
import HomeView from './view';
import { requests } from 'api/requests';

const HomeController = () => { 
	let effect = async () => {
		let res = await requests.product.getProducts()
		console.log (res.data) 
		
	}
	useEffect(() => {
		effect();
	}, [])
	//TODO styles and move hooks to controller
	let itemWidth = windowWidth - 2 * paddingVertical;
	const [activeSlide, setActiveSlide] = useState(0);
	return <HomeView {...{ width: itemWidth, setActiveSlide, activeSlide }} />;
};

export default HomeController;
