import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { categories } from '../data';
import CategoriesItem from './CategoriesItem';

const BrandsView = () => {
	return (
		<View>
			<FlatList
				data={categories}
				renderItem={CategoriesItem}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default BrandsView;

const styles = StyleSheet.create({});
