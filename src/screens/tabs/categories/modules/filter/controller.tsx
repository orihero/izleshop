import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import { Routes } from 'constants/routes';
import { CategoriesStackParamList } from 'routes/tabs/CategoriesStack';
import FilterView from './view';

export type FilterScreenNavigationProp = NativeStackNavigationProp<
	CategoriesStackParamList,
	Routes.FILTER
>;

export type FilterScreenRouteProp = RouteProp<
	CategoriesStackParamList,
	Routes.FILTER
>;

export type FilterScreenProps = {
	navigation: FilterScreenNavigationProp;
	route: FilterScreenRouteProp;
};

const FilterController = ({ navigation, route }: FilterScreenProps) => {
	const [categories, setCategories] = useState([]);

	let effect = async () => {
		let res = await requests.product.getCategories();
		setCategories(res.data);
	};

	useEffect(() => {
		effect();
	}, []);

	return (
		<FilterView
			navigation={navigation}
			route={route}
			categories={categories}
		/>
	);
};

export default FilterController;
