import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import MyOrdersView from './view';

const MyOrdersController = () => {
	const [userOrders, setUserOrders] = useState([]);
	const [products, setProducts] = useState([]);
	let effect = async () => {
		let pRes = await requests.product.getProducts();
		let res = await requests.product.getUserOrders();
		setUserOrders(res.data);
		setProducts(pRes.data.data);
	};

	useEffect(() => {
		effect();
	}, []);
	return <MyOrdersView {...{ userOrders, products }} />;
};

export default MyOrdersController;
