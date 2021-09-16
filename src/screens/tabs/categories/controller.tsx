import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Routes } from 'src/constants/routes';
import { CategoriesStackParamList } from 'src/routes/tabs/CategoriesStack';
import CategoriesView from './view';

export type CategoriesNavigationProp = NativeStackNavigationProp<
	CategoriesStackParamList,
	Routes.CATEGORIES
>;

export type CategoriesScreenProps = {
	navigation: CategoriesNavigationProp;
};

const CategoriesController = () => {
	return <CategoriesView />;
};

export default CategoriesController;
