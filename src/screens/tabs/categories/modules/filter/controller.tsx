import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Routes } from 'src/constants/routes';
import { CategoriesStackParamList } from 'src/routes/tabs/CategoriesStack';
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
	return <FilterView navigation={navigation} route={route} />;
};

export default FilterController;
