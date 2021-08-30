import React from 'react';
import {
	FlatList,
	ListRenderItemInfo,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { colors } from '../../../../constants/colors';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

export type CategoriesItemProps = typeof categories[0];

const CategoriesItem = ({ item }: ListRenderItemInfo<CategoriesItemProps>) => {
	return (
		<View>
			<Text style={styles.title}>{item.label}</Text>
			<FlatList
				horizontal
				data={item.subCategories}
				renderItem={CategoryItem}
				contentContainerStyle={{ paddingLeft: 15 }}
			/>
		</View>
	);
};

export default CategoriesItem;

const styles = StyleSheet.create({
	title: {
		fontWeight: '700',
		fontSize: 14,
		color: colors.black,
		paddingLeft: 20,
		paddingTop: 20,
	},
});
