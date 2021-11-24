import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import MyOrdersView from './view';

const MyOrdersController = ({ route }) => {
	const [userOrders, setUserOrders] = useState([]);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	let { orders } = route?.params || {};

	let effect = async () => {
		setLoading(true);
		let pRes = await requests.product.getProducts();
		// let res = await requests.product.getUserOrders();
		setProducts(pRes.data.data);
		// if (!!status) {
		// 	setUserOrders(res.data.filter((e) => e.status == status));
		// } else {
		// 	setUserOrders(res.data);
		// }
		setLoading(false);
	};

	useEffect(() => {
		effect();
	}, []);
	return <MyOrdersView {...{ userOrders: orders, products, loading }} />;
};

export default MyOrdersController;
