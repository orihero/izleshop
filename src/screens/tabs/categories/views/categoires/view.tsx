import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, View } from 'react-native';
import Item from '../../components/Item';
import { CategoriesNavigationProp } from '../../controller';
import { styles } from './style';

export interface CategoriesViewProps {
	categories: any;
}

const CategoriesView = ({ categories }: CategoriesViewProps) => {
	const navigation = useNavigation<CategoriesNavigationProp>();
	return (
		<View style={styles.container}>
			<FlatList
				data={categories}
				renderItem={(props) => <Item {...props} />}
				showsVerticalScrollIndicator={false}
				numColumns={3}
			/>
		</View>
	);
};

export default CategoriesView;
