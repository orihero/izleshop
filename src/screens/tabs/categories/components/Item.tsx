import React from 'react';
import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Pressable from 'components/general/Pressable';
import { colors } from 'constants/colors';
import { categories } from '../data';
import { Routes } from 'constants/routes';
let el = categories[0].subCategories[0];

const Item = ({
	item,
	navigation,
	fromPage,
}: ListRenderItemInfo<typeof el>) => {
	const onPress = () => {
		if (fromPage === 'categories') {
			navigation.navigate(Routes.PRODUCTS, {
				from: fromPage,
				title: item.label,
			});
		}
		if (fromPage === 'brands') {
			navigation.navigate(Routes.PRODUCTS, {
				from: fromPage,
				title: item.label,
			});
		}
	};

	return item ? (
		<Pressable onPress={onPress}>
			<View style={styles.parentContainer}>
				<View style={styles.container}>
					<Image source={item.img} style={styles.image} />
				</View>
				<Text
					lineBreakMode={'tail'}
					numberOfLines={1}
					style={styles.title}
				>
					{item.label}
				</Text>
			</View>
		</Pressable>
	) : null;
};

export default Item;

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
		marginTop: 5,
	},
	title: {
		fontWeight: '500',
		fontSize: 10,
		width: 100,
		textAlign: 'center',
		color: colors.black,
		paddingLeft: 20,
		// paddingVertical: 20,
		paddingTop: 10,
	},
	parentContainer: {},
	image: {
		width: '100%',
		height: '100%',
	},
});
