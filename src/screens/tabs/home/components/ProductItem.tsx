import React from 'react';
import { Image, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { CartIcon, HeartIcon, StarIcon } from '../../../../assets/icons/icons';
import Text from '../../../../components/general/Text';
import { colors } from '../../../../constants/colors';
import { windowWidth } from '../../../../constants/sizes';
import { products } from '../data';
import Rating from './Rating';

export type ProductItem = typeof products[0];

const ProductItem = ({ item, index }: ListRenderItemInfo<ProductItem>) => {
	return (
		<View style={styles.productContainer}>
			<View style={styles.container}>
				<Image source={{ uri: item.photoUrl }} style={styles.image} />
				<View style={styles.buttonsContainer}>
					<CartIcon color={colors.blue} size={20} />
					<HeartIcon color={colors.red} size={20} />
				</View>
			</View>
			<Rating />
			<Text style={styles.text} numberOfLines={2}>
				{item.name}
			</Text>
			<Text style={styles.oldPrice}>{item.oldPrice}</Text>
			<Text style={styles.newPrice}>{item.newPrice}</Text>
		</View>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		padding: 15,
		borderRadius: 8,
		marginLeft: 20,
	},
	image: {
		width: (windowWidth - 40 - 30 - 40) / 2,
		height: (windowWidth - 40 - 30 - 40) / 2,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		height: 30,
		alignItems: 'center',
	},
	productContainer: {
		width: windowWidth / 2 - 5,
	},
	text: {
		fontSize: 16,
		lineHeight: 19,
		color: colors.black,
		paddingHorizontal: 20,
		fontWeight: '600',
		paddingTop: 5,
		textAlign: 'center',
	},
	oldPrice: {
		textDecorationLine: 'line-through',
		color: colors.gray,
		textDecorationColor: colors.gray,
		fontSize: 18,
		textAlign: 'center',
		fontWeight: '600',
		paddingTop: 10,
	},
	newPrice: {
		color: colors.blue,
		fontSize: 20,
		fontWeight: '800',
		textAlign: 'center',
		marginBottom: 20,
	},
});
