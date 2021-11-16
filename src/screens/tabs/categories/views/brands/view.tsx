import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, FlatList } from 'react-native';
import BrandsItem from '../../components/BrandsItem';
import Content from '../../components/Content';
import { CategoriesNavigationProp } from '../../controller';
import { categories } from '../../data';

export interface BrandsViewProps {
	brands: any;
}

const BrandsView = ({ brands }: BrandsViewProps) => {
	const navigation = useNavigation<CategoriesNavigationProp>();
	console.log({ brands });

	return (
		<View style={{ paddingTop: 20 }}>
			<FlatList
				data={brands}
				renderItem={(props) => <BrandsItem {...props} />}
				showsVerticalScrollIndicator={false}
				numColumns={3}
			/>
		</View>
	);
};

export default BrandsView;
