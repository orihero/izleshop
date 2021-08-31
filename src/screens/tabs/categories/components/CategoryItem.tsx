import React from 'react';
import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { colors } from 'constants/colors';
import { categories } from '../data';
let el = categories[0].subCategories[0];

const CategoryItem = ({ item }: ListRenderItemInfo<typeof el>) => {
	return (
		<View style={styles.parentContainer}>
			<View style={styles.container}>
				<Image source={{ uri: item.imgUrl }} style={styles.image} />
			</View>
			<Text style={styles.title}>{item.label}</Text>
		</View>
	);
};

export default CategoryItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		padding: 15,
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 0 },
		borderRadius: 10,
		width: 100,
		height: 100,
		marginHorizontal: 5,
		marginTop: 10,
	},
	title: {
		fontWeight: '500',
		fontSize: 10,
		color: colors.black,
		paddingLeft: 20,
		paddingVertical: 20,
	},
	parentContainer: {},
	image: {
		width: '100%',
		height: '100%',
	},
});
