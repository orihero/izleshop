import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import ProductDetailsView from './view';

const ProductDetailsController = ({ route }) => {
	const [details, setDetails] = useState({});


	let effect = async () => {
		let res = await requests.product.getDetails(route.params?.id);
		setDetails(res.data);
	};

	useEffect(() => {
		effect();
	}, [route.params?.id]);

	const [activeSlide, setActiveSlide] = useState(0);
	return <ProductDetailsView {...{ activeSlide, setActiveSlide, details,}} />;
};

export default ProductDetailsController;
