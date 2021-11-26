import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { requests } from 'api/requests';
import { Routes } from 'constants/routes';
import { CategoriesStackParamList } from 'routes/tabs/CategoriesStack';
import SearchView from './view';

export interface IPage {
	page: number;
}

export type ProductsScreenNavigationProp = NativeStackNavigationProp<
	CategoriesStackParamList,
	Routes.SEARCH
>;

export type ProductsScreenRofuteProp = RouteProp<
	CategoriesStackParamList,
	Routes.SEARCH
>;

export type ProductsScreenProps = {
	route: ProductsScreenRouteProp;
	navigation: ProductsScreenNavigationProp;
};

const SearchController = ({ route, navigation }: ProductsScreenProps) => {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	let loadMoreProducts = async () => {
		try {
			let res = await requests.product.getProducts({
				pageSize: 100,
			});
			if (res.data.data) {
				setProducts([...products, ...res.data.data]);
			}
		} catch (error) {}
	};
	return (
		<SearchView
			route={route}
			navigation={navigation}
			{...{ setPage, page, loadMoreProducts, products }}
		/>
	);
};

export default SearchController;
