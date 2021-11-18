import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import ProductDetailsView from './view';
import { strings } from 'locales/locales';

const ProductDetailsController = ({ route, navigation }) => {
	const [details, setDetails] = useState({});
	const [loading, setLoading] = useState(false);

	let effect = async () => {
		setLoading(true)
		try {
			let res = await requests.product.getDetails(route.params?.id);
			setDetails(res.data);
		} catch (error) {
			alert(strings.noSuchProduct)
			navigation.goBack();
		}
		setLoading(false)
	};

	useEffect(() => {
		effect();
	}, [route.params?.id]);

	const [activeSlide, setActiveSlide] = useState(0);
	return <ProductDetailsView {...{ activeSlide, setActiveSlide, details, loading }} />;
};

export default ProductDetailsController;
