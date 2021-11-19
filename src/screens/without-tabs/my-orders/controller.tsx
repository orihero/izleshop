import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import MyOrdersView from './view';

const MyOrdersController = () => {
	const [userOrders, setUserOrders] = useState([]);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	let effect = async () => {
		setLoading(true);
		let pRes = await requests.product.getProducts();
		let res = await requests.product.getUserOrders();
		setUserOrders(res.data);
		setProducts(pRes.data.data);
		setLoading(false);
	};

	useEffect(() => {
		effect();
	}, []);
	return <MyOrdersView {...{ userOrders, products, loading }} />;
};

export default MyOrdersController;
