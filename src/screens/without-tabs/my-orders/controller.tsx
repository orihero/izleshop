import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import MyOrdersView from './view';

const MyOrdersController = () => {
	const [userOrders, setUserOrders] = useState([]);
	let effect = async () => {
		let res = await requests.product.getUserOrders();
		setUserOrders(res.data);
	};

	useEffect(() => {
		effect();
	}, []);
	return <MyOrdersView {...{ userOrders }} />;
};

export default MyOrdersController;
