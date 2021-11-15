import React, { useEffect, useState } from 'react';
import { paddingVertical, windowWidth } from 'constants/sizes';
import HomeView from './view';
import { requests } from 'api/requests';

const HomeController = () => {
	const [products, setProducts] = useState([]);
	const [banners, setBanners] = useState([]);
	let effect = async () => {
		try {
			let res = await requests.product.getProducts();
			let bannersRes = await requests.product.getBanners();
			setBanners(bannersRes.data);
			console.log(bannersRes.data);

			setProducts(res.data.data);
		} catch (error) {
			// alert ('Error in product page');
		}
	};
	useEffect(() => {
		effect();
	}, []);
	//TODO styles and move hooks to controller
	let itemWidth = windowWidth - 2 * paddingVertical;
	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<HomeView
			{...{
				width: itemWidth,
				setActiveSlide,
				activeSlide,
				products,
				banners,
			}}
		/>
	);
};

export default HomeController;
