import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { categories } from '../data';
import CategoriesItem from './CategoriesItem';

const BrandsView = () => {
	return (
		<View>
			<FlatList data={categories} renderItem={CategoriesItem} />
		</View>
	);
};

export default BrandsView;

const styles = StyleSheet.create({});
