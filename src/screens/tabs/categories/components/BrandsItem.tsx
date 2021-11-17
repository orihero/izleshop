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

let el = categories[0].childs[0];

const BrandsItem = ({ item }: ListRenderItemInfo<typeof el>) => {
	console.log('This is an item', item, 'in items');
	let navigation = useNavigation();
	let fromPage = 'categories';
	const onPress = () => {
		navigation.navigate(Routes.PRODUCTS, {
			from: fromPage,
			title: item.name || ' ',
			brandId: item.id,
		});
	};

	return (
		<Pressable onPress={onPress}>
			<View style={styles.parentContainer}>
				<View style={styles.container}>
					{/* <SvgXml xml={item.svg} width={60} height={60} /> */}
					<Image
						source={{
							uri: item.image,
						}}
						style={styles.img}
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

export default BrandsItem;

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
	img: {
		width: 85,
		height: 85,
		resizeMode: 'contain',
	},
	image: {
		height: 40,
		// resizeMode: 'contain',
		width: 40,
	},
});
