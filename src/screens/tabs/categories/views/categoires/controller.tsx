import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import CategoriesView from './view';

const CategoriesController = () => {
	const [categories, setCategories] = useState({});

	let effect = async () => {
		let res = await requests.product.getCategories();
		setCategories(res.data);
	};

	useEffect(() => {
		effect();
	}, []);

	return <CategoriesView {...{ categories }} />;
};

export default CategoriesController;
