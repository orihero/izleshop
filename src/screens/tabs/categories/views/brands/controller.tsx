import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import BrandsView from './view';

const BrandsController = () => {
	const [brands, setBrands] = useState([]);

	let effect = async () => {
		let res = await requests.product.getBrands();
		setBrands(res.data);
	};

	useEffect(() => {
		effect();
	}, []);

	return <BrandsView {...{ brands }} />;
};

export default BrandsController;
