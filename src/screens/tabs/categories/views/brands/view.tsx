import React from 'react';
import { View, FlatList } from 'react-native';
import Content from '../../components/Content';
import { categories } from '../../data';

const BrandsView = () => {
	return (
		<View style={{ paddingTop: 20 }}>
			<FlatList
				data={categories}
				renderItem={(props) => <Content {...props} disableTitle />}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default BrandsView;
