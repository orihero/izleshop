import React from 'react';
import { FlatList, View } from 'react-native';
import Content from '../../components/Content';
import { categories } from '../../data';

const CategoriesView = () => {
	return (
		<View>
			<FlatList
				data={categories}
				renderItem={Content}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default CategoriesView;
