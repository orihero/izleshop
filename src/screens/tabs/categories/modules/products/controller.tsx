import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Routes } from 'src/constants/routes';
import { CategoriesStackParamList } from 'src/routes/tabs/CategoriesStack';
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
	return <ProductsView route={route} navigation={navigation} />;
};

export default ProductsController;
