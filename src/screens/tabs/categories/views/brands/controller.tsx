import React, { useEffect, useState } from 'react';
import { requests } from 'src/api/requests';
import BrandsView from './view';

const BrandsController = () => {
	const [brands, setBrands] = useState([]);
	let effect = () => {
		// let res = await requests.product.
	};
	useEffect(() => {
		effect();
	}, []);
	return <BrandsView />;
};

export default BrandsController;
