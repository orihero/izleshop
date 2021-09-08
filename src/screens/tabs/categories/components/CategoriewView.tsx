import React from 'react';
import { FlatList, View } from 'react-native';
import { categories } from '../data';
import CategoriesItem from './CategoriesItem';

const CategoriewView = () => {
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

export default CategoriewView;
