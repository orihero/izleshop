import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, FlatList } from 'react-native';
import Content from '../../components/Content';
import { CategoriesNavigationProp } from '../../controller';
import { categories } from '../../data';

const BrandsView = () => {
	const navigation = useNavigation<CategoriesNavigationProp>();

	return (
		<View style={{ paddingTop: 20 }}>
			<FlatList
				data={categories}
				renderItem={(props) =>
					// <BrandItem {...props}/>
					null
				}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default BrandsView;
