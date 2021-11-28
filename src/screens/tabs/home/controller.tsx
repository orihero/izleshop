import React, { useEffect, useState } from 'react';
import { paddingVertical, windowWidth } from 'constants/sizes';
import HomeView from './view';
import { requests } from 'api/requests';
import { useAppDispatch } from 'utils/hooks';
import { setDollarRate } from 'store/slices/userSlice';

export interface IPage {
	page: number;
}

const HomeController = () => {
	const [products, setProducts] = useState([]);
	const [banners, setBanners] = useState([]);
	const [page, setPage] = useState(1);

	let loadMoreProducts = async () => {
		try {
			let res = await requests.product.getProducts({
				pageSize: 100,
				page: page + 1,
			});
			if (res.data.data) {
				setProducts([...products, ...res.data.data]);
			}
		} catch (error) {}
	};

	let dispatch = useAppDispatch();
	let effect = async () => {
		try {
			let dRes = await requests.product.getDollarRate();
			dispatch(setDollarRate(dRes.data[0].dollar_rate));
			let res = await requests.product.getProducts({
				page,
				pageSize: 10,
			});
			let bannersRes = await requests.product.getBanners();
			setBanners(bannersRes.data.filter((e) => e.for_app !== 1));
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
				setPage,
				page,
				loadMoreProducts,
			}}
		/>
	);
};

export default HomeController;
