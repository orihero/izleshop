import React from 'react';

import { useNavigation } from '@react-navigation/core';

import { addToCart, removeFromCart, selectCart } from 'store/slices/cartSlice';
import {
	addItem,
	removeItem,
	selectFavorites,
} from 'store/slices/favoritesSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';

import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import Rating from 'components/special/Rating';
import Text from 'components/general/Text';

import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { windowWidth } from 'constants/sizes';
import {
	CartIcon,
	CloseIcon,
	HeartIcon,
	PressableIcon,
} from 'assets/icons/icons';

export interface ProductItemModel {
	id: number;
	title: string;
	rating?: number;
	oldPrice?: string;
	newPrice: string;
	currency: string;
	isFavorite?: boolean;
	isInCart?: boolean;
	img: any;
}

const ProductItem = ({
	item,
	index,
	sizeChanged = false,
	closeIcon = false,
}: ListRenderItemInfo<ProductItemModel>) => {
	let favorites = useAppSelector(selectFavorites);
	let cart = useAppSelector(selectCart);
	let isInCart = !!cart[item.id];
	let isFavorite = !!favorites[item.id];
	let dispatch = useAppDispatch();
	let naviation = useNavigation();
	let onHeartPress = () => {
		if (isFavorite) {
			dispatch(removeItem(item.id.toString()));
		} else {
			dispatch(addItem(item));
		}
	};

	let onCartPress = () => {
		if (isInCart) {
			dispatch(removeFromCart(item.id.toString()));
		} else {
			dispatch(addToCart(item));
		}
	};

	let onItemPress = () => {
		naviation.navigate(Routes.PRODUCT_DETAILS);
	};

	return (
		<TouchableWithoutFeedback onPress={onItemPress}>
			<View style={styles.productContainer}>
				<View
					style={[
						styles.container,
						!sizeChanged ? styles.ml20 : null,
					]}
				>
					{closeIcon ? (
						<View style={styles.absolute}>
							<CloseIcon color={colors.gray} size={15} />
						</View>
					) : null}
					<View style={styles.center}>
						<Image source={item.img} style={styles.image} />
					</View>
					<View style={styles.buttonsContainer}>
						<PressableIcon onPress={onCartPress}>
							<View style={styles.buttonCont}>
								<CartIcon
									size={20}
									active={isInCart}
									color={colors.blue}
								/>
							</View>
						</PressableIcon>
						<PressableIcon onPress={onHeartPress}>
							<View style={styles.buttonCont}>
								<HeartIcon
									size={20}
									color={colors.red}
									active={isFavorite}
									onPress={onHeartPress}
								/>
							</View>
						</PressableIcon>
					</View>
				</View>
				<Rating />
				<Text style={styles.text} numberOfLines={2}>
					{item.title}
				</Text>
				<Text style={styles.oldPrice}>
					{`${item.oldPrice} ${item.currency}`}
				</Text>
				<Text style={styles.newPrice}>
					{`${item.newPrice} ${item.currency}`}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	absolute: {
		position: 'absolute',
		right: 10,
		zIndex: 20,
		top: 10,
	},
	container: {
		backgroundColor: colors.white,
		padding: 15,
		borderRadius: 8,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: (windowWidth - 40 - 30 - 40) / 2,
		height: (windowWidth - 40 - 30 - 40) / 2,
		resizeMode: 'contain',
	},
	buttonsContainer: {
		height: 30,
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonCont: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	productContainer: {
		width: windowWidth / 2 - 5,
		// backgroundColor: 'aqua',
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
	ml20: {
		marginLeft: 20,
	},
});
