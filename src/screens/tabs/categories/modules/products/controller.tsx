import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { requests } from 'api/requests';
import { Routes } from 'constants/routes';
import { CategoriesStackParamList } from 'routes/tabs/CategoriesStack';
import ProductsView from './view';

export type ProductsScreenNavigationProp = NativeStackNavigationProp<
	CategoriesStackParamList,
	Routes.PRODUCTS
>;

export type ProductsScreenRouteProp = RouteProp<
	CategoriesStackParamList,
	Routes.PRODUCTS
>;

export type ProductsScreenProps = {
	route: ProductsScreenRouteProp;
	navigation: ProductsScreenNavigationProp;
};

const ProductsController = ({ route, navigation }: ProductsScreenProps) => {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	// let loadMoreProducts = async () => {
	// 	setLoading(true);
	// 	try {
	// 		let res = await requests.product.getProducts({
	// 			pageSize: 100,
	// 		});
	// 		if (res.data.data) {
	// 			setProducts(res.data.data);
	// 		}
	// 	} catch (error) {}
	// 	setLoading(false);
	// };
	return (
		<ProductsView
			route={route}
			navigation={navigation}
			{...{ setPage, page, setProducts, loading, products }}
		/>
	);
};

export default ProductsController;
