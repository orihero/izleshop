import { useNavigation } from '@react-navigation/core';
import { CartIcon, CloseIcon, PressableIcon } from 'assets/icons/icons';
import Text from 'components/general/Text';
// import Routes from 'constants/routes'
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { windowWidth } from 'constants/sizes';
import React from 'react';
import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { addToCart, removeFromCart, selectCart } from 'store/slices/cartSlice';
import {
	addItem,
	removeItem,
	selectFavorites,
} from 'store/slices/favoritesSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';

export interface IVerticalItemModel {
	id?: number;
	title?: string;
	newPrice?: string;
	currency?: string;
	ratingCount?: number;
	rating?: number;
	status?: string;
	isFavorite?: boolean;
	isInCart?: boolean;
	img?: any;
}

type RenderedItemProps = ListRenderItemInfo<{
	data: IVerticalItemModel;
	count: number;
}>;

export interface IVerticalItemProps {
	item: IVerticalItemModel;
	bigSize?: boolean;
	hasClose?: boolean;
	hasMargin?: boolean;
}

const VerticalItem = ({ item, bigSize, hasClose, hasMargin }: IVerticalItemProps) => {
	const { id, title, newPrice, currency, ratingCount, rating, status, img } =
		item || {};

	let favorites = useAppSelector(selectFavorites);
	let cart = useAppSelector(selectCart);
	let isInCart = item && !!cart[item && id];
	let isFavorite = item && !!favorites[item && id];
	let dispatch = useAppDispatch();
	let naviation = useNavigation();

	let onHeartPress = () => {
		if (isFavorite) {
			dispatch(removeItem(id.toString()));
		} else {
			dispatch(addItem(item));
		}
	};

	let onCartPress = () => {
		if (isInCart) {
			dispatch(removeFromCart(id.toString()));
		} else {
			dispatch(addToCart(item));
		}
	};

	let onItemPress = () => {
		naviation.navigate(Routes.PRODUCT_DETAILS);
	};

	return item ? (
		<TouchableWithoutFeedback onPress={onItemPress}>
			<View style={[bigSize ? styles.width1 : styles.width2, hasMargin && { marginVertical: 10 }]}>
				<View style={bigSize ? styles.cont1 : styles.cont2}>
					{hasClose ? (
						<View style={styles.absolute}>
							<CloseIcon
								color={colors.gray}
								size={bigSize ? 15 : 12}
							/>
						</View>
					) : null}
					<View style={bigSize ? styles.imgCont1 : styles.imgCont2}>
						<Image
							source={img}
							style={bigSize ? styles.imgS1 : styles.imgS2}
						/>
					</View>
					<View style={bigSize ? styles.btnRow1 : styles.btnRow2}>
						<PressableIcon onPress={onCartPress}>
							<View style={styles.buttonCont}>
								<CartIcon
									size={20}
									active={isInCart}
									color={colors.blue}
								/>
							</View>
						</PressableIcon>
						{/* <PressableIcon onPress={onHeartPress}>
							<View style={styles.buttonCont}>
								<HeartIcon
									size={20}
									color={colors.red}
									active={isFavorite}
									onPress={onHeartPress}
								/>
							</View>
						</PressableIcon> */}
					</View>
					{/* <View style={styles.ratingRow}></View> */}
					<Text style={styles.text} numberOfLines={2}>
						{title}
					</Text>
					<Text
						style={styles.newPrice}
					>{`${newPrice} ${currency}`}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	) : null;
};

export default VerticalItem;

export const styles = StyleSheet.create({
	width1: {
		width: windowWidth / 2 - 30,
		marginLeft: 20,
	},
	width2: {
		width: windowWidth / 2 - 20,
	},
	cont1: {
		padding: 15,
		borderRadius: 8,
		backgroundColor: colors.white,
	},
	cont2: {
		borderRadius: 8,
		paddingVertical: 15,
		paddingHorizontal: 7.5,
		// marginLeft: 10,
		backgroundColor: colors.white,
	},
	imgCont1: {
		width: '100%',
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imgCont2: {
		width: '100%',
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imgS1: {
		width: '100%',
		height: '100%',
		// width: (windowWidth - 40 - 30 - 40) / 2,
		// height: (windowWidth - 40 - 30 - 40) / 2,
		resizeMode: 'contain',
	},
	imgS2: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	btnRow1: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	btnRow2: {
		marginTop: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	buttonCont: {
		width: 30,
		height: 30,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	ratingRow: {
		marginTop: 5,
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
		marginTop: 5,
		lineHeight: 19,
		fontWeight: 'bold',
		color: colors.neutralDark,
		textAlign: 'justify',
	},
	newPrice: {
		paddingTop: 10,
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'left',
		color: colors.blue,
	},
	absolute: {
		top: 5,
		right: 5,
		width: 25,
		height: 25,
		zIndex: 20,
		alignItems: 'center',
		position: 'absolute',
		justifyContent: 'center',
	},
	ml20: {
		marginLeft: 20,
	},
});
