import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Routes } from 'src/constants/routes';
import { CategoriesStackParamList } from 'src/routes/tabs/CategoriesStack';
import SearchView from './view';

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
	const [products, setProducts] = useState([])
	return <SearchView route={route} navigation={navigation} />;
};

export default SearchController;
