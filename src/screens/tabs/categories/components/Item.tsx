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
	let navigation = useNavigation();
	let fromPage = 'categories';
	const onPress = () => {
		if (fromPage === 'categories') {
			navigation.navigate(Routes.PRODUCTS, {
				from: fromPage,
				title: item.name || 'title',
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
					<Image
						source={{
							uri: item.image,
						}}
						style={{
							width: 90,
							height: 90,
						}}
						resizeMode={'contain'}
					/>
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

let { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {
		width: 110,
		height: 105,
		padding: 15,
		marginTop: 14,
		borderRadius: 10,
		shadowOpacity: 0.25,
		marginHorizontal: 5,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
		shadowOffset: { width: 0, height: 0 },
	},
	title: {
		width: 100,
		fontSize: 10,
		paddingTop: 10,
		paddingLeft: 20,
		fontWeight: '500',
		textAlign: 'center',
		color: colors.black,
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
