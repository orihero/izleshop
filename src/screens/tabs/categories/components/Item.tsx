import React from 'react';
import {
	Dimensions,
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
import { useNavigation } from '@react-navigation/core';
import { SvgFromUri, SvgXml } from 'react-native-svg';

let el = categories[0].childs[0];

const Item = ({ item }: ListRenderItemInfo<typeof el>) => {
	console.log('This is an item', item);
	let navigation = useNavigation();
	let fromPage = 'categories';
	const onPress = () => {
		if (fromPage === 'categories') {
			navigation.navigate(Routes.PRODUCTS, {
				from: fromPage,
				title: item.title || 'title',
				categoryId: item.id,
			});
		}
		if (fromPage === 'brands') {
			navigation.navigate(Routes.PRODUCTS, {
				from: fromPage,
				title: item.title || 'title',
				categoryId: item.id,
			});
		}
	};

	return (
		<Pressable onPress={onPress}>
			<View style={styles.parentContainer}>
				<View style={styles.container}>
					<SvgXml xml={item.svg} width={60} height={60} />
				</View>
				<Text
					lineBreakMode={'tail'}
					numberOfLines={1}
					style={styles.title}
				>
					{item.title}
				</Text>
			</View>
		</Pressable>
	);
};

export default Item;

let { width, height } = Dimensions.get('screen');

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
		justifyContent: 'center',
		alignItems: 'center',
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
	parentContainer: {
		width: width / 3,
	},
	image: {
		height: 40,
		// resizeMode: 'contain',
		width: 40,
	},
});
