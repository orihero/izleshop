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

let el = categories[0].childs[0];

export interface ItemViewProps {
	setActiveSlide: (e: number) => void;
	activeSlide: number;
}

const Item = ({
	item,
	navigation,
	fromPage,
}: ListRenderItemInfo<typeof el>) => {
	const onPress = () => {
		if (fromPage === 'categories') {
			navigation.navigate(Routes.PRODUCTS, {
				from: fromPage,
				title: item.title || 'title',
			});
		}
		if (fromPage === 'brands') {
			navigation.navigate(Routes.PRODUCTS, {
				from: fromPage,
				title: item.title || 'title',
			});
		}
	};

	return (
		<Pressable onPress={onPress}>
			<View style={styles.parentContainer}>
				<View style={styles.container}>
					<Image source={item.image} style={styles.image} />
				</View>
				<Text
					lineBreakMode={'tail'}
					numberOfLines={1}
					style={styles.title}
				>
					{item.name}
				</Text>
			</View>
		</Pressable>
	);
};

export default Item;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		padding: 15,
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 0 },
		borderRadius: 10,
		width: 110,
		height: 105,
		marginHorizontal: 5,
		marginTop: 14,
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
		height: 40,
		resizeMode: 'contain',
	},
});
