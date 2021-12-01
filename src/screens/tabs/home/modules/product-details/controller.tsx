import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import ProductDetailsView from './view';
import { strings } from 'locales/locales';

const ProductDetailsController = ({ route, navigation }) => {
	const [details, setDetails] = useState({});
	const [loading, setLoading] = useState(false);
	const [comments, setComments] = useState([]);

	let effect = async () => {
		setLoading(true);
		try {
			let res = await requests.product.getDetails(route.params?.id);
			let commentsRes = await requests.product.getComments();
			setDetails(res.data);
			setComments(
				(commentsRes?.data || []).filter(
					(e) => !!e.approve && e.product_id === route.params?.id
				)
			);
		} catch (error) {
			alert(strings.noSuchProduct);
			navigation.goBack();
		}
		setLoading(false);
	};

	useEffect(() => {
		effect();
	}, [route.params?.id]);

	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<ProductDetailsView
			{...{ activeSlide, setActiveSlide, details, loading, comments }}
		/>
	);
};

export default ProductDetailsController;
