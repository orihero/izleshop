import { useNavigation } from '@react-navigation/core';
import { CartIcon, ExitIcon, HeartIcon, TrashIcon } from 'assets/icons/icons';
import ItemCounter from 'components/special/ItemCounter';
import Rating from 'components/special/Rating';
import { colors } from 'constants/colors';
import { strings } from 'locales/locales';
import React, { useState } from 'react';
import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { Routes } from 'constants/routes';
import {
	addToCart,
	decrementCount,
	incrementCount,
	removeFromCart,
	selectCart,
} from 'store/slices/cartSlice';
import {
	addItem,
	removeItem,
	selectFavorites,
} from 'store/slices/favoritesSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { selectDollarRate } from 'store/slices/userSlice';

export interface IFavoriteItemModel {
	id?: number;
	title?: string;
	newPrice?: string;
	oldPrice?: string;
	currency?: string;
	ratingCount?: number;
	rating?: number;
	status?: string;
	isFavorite?: boolean;
	isInCart?: boolean;
	img?: any;
}

type RenderedItemProps = ListRenderItemInfo<{
	data: IFavoriteItemModel;
	count?: number;
}>;

export interface IFavoriteItemProps {
	item: RenderedItemProps;
	hasCounter?: boolean;
	hasRating?: boolean;
	hasBasket?: boolean;
	hasRemove?: boolean;
}

const FavoriteItem = ({
	item,
	hasCounter,
	hasRating,
	hasBasket,
	hasRemove = true,
}: IFavoriteItemProps) => {
	const {
		id,
		name: title,
		price: newPrice,
		currency = strings.soum,
		ratingCount,
		rating,
		status,
		image,
	} = item.data || item;

	const dispatch = useAppDispatch();

	const [isChecked, setIsChecked] = useState(false);

	let favorites = useAppSelector(selectFavorites);
	let dollarRate = useAppSelector(selectDollarRate);
	let cartItems = useAppSelector(selectCart);
	let isFavorite = !!favorites[item.data?.id || id];
	let isInCart = !!cartItems[item.data?.id || id];

	let onLike = () => {
		dispatch(!isFavorite ? addItem(item.data) : removeItem(id));
	};

	let onRemove = () => {
		dispatch(removeFromCart(id.toString()));
	};

	let onIncrement = () => {
		dispatch(incrementCount(id.toString()));
	};

	let onDecrement = () => {
		if (item.count - 1 <= 0) {
			onRemove();
		} else {
			dispatch(decrementCount(id.toString()));
		}
	};
	let onCartPress = () => {
		dispatch(isInCart ? removeFromCart(id) : addToCart(item.data || item));
	};
	let onCheck = () => {
		setIsChecked(!isChecked);
	};

	let navigation = useNavigation();

	let onItemPress = () => {
		navigation.navigate(Routes.PRODUCT_DETAILS, { id: id });
	};

	let p = (newPrice * dollarRate)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	p = p.substr(0, p.length - 2) + '00';

	return (
		<TouchableWithoutFeedback onPress={onItemPress}>
			<View style={styles.container}>
				<View style={styles.imgCont}>
					{hasRemove && (
						<View style={styles.checkBox}>
							{isChecked && (
								<Image
									style={styles.imgCheck}
									source={require('../../../../assets/images/check.png')}
								/>
							)}
						</View>
					)}
					<Image source={{ uri: image }} style={styles.image} />
				</View>
				<View style={styles.center}>
					<View style={styles.box}>
						{status ? (
							<View style={styles.row}>
								<Text style={styles.text1}>{`ID: ${id}`}</Text>
								<Text style={styles.text2}>{status}</Text>
							</View>
						) : null}
						<Text
							style={styles.text3}
							numberOfLines={2}
							lineBreakMode={'tail'}
						>
							{title}
						</Text>
					</View>
					<Text style={styles.text4}>{`${p} ${currency}`}</Text>
					<View style={styles.plus}>
						<Rating
							defaultStyle
							active={rating}
							count={ratingCount}
						/>
						<View style={styles.rightEdge}>
							<View style={styles.irow}>
								{hasBasket ? (
									<TouchableOpacity onPress={onCartPress}>
										<View style={[styles.square, styles.mr10]}>
											<CartIcon
												size={22}
												color={colors.blue}
												active={isInCart}
											/>
										</View>
									</TouchableOpacity>
								) : null}
							</View>
							<TouchableOpacity onPress={onLike}>
								<View style={styles.square}>
									<HeartIcon
										size={22}
										color={
											isFavorite ? colors.red : colors.leghtGrey1
										}
										active={isFavorite}
									/>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default FavoriteItem;

const styles = StyleSheet.create({
	container: {
		padding: 5,
		borderRadius: 15,
		flexDirection: 'row',
		backgroundColor: colors.white,
		justifyContent: 'space-between',
	},
	imgCont: {
		width: 90,
		height: 90,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	checkBox: {
		width: 20,
		height: 20,
		marginLeft: 12,
		borderRadius: 30,
		borderWidth: 3,
		marginTop: 38,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'rgba(170, 170, 204, 0.25)',
	},
	imgCheck: {
		width: 10,
		height: 10,
	},
	center: {
		flex: 1,
		marginHorizontal: 14,
		justifyContent: 'space-between',
	},
	box: {},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	text1: {
		fontSize: 12,
		lineHeight: 14,
		fontWeight: '600',
	},
	text2: {
		fontSize: 10,
		lineHeight: 12,
		marginLeft: 10,
		fontWeight: '400',
		color: colors.gray,
	},
	text3: {
		fontSize: 14,
		marginTop: 3,
		lineHeight: 17,
		fontWeight: '600',
		color: colors.black,
	},
	plus: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text4: {
		paddingTop: 7,
		// paddingRight: 10,
		fontSize: 16,
		lineHeight: 22,
		fontWeight: '800',
		color: colors.blue,
		flexDirection: 'row',
		alignItems: 'center',
		textAlignVertical: 'center',
		// flex: 1,
	},
	rightEdge: {
		flexDirection: 'row',
	},
	irow: {
		height: 5,
		alignItems: 'center',
		paddingBottom: 14,
		flexDirection: 'column',
	},
	square: {
		width: 30,
		height: 10,
		paddingBottom: 14,
		alignItems: 'center',
		justifyContent: 'center',
	},
	mr15: {
		marginRight: 15,
	},
	mr10: {
		// marginRight: 1,
	},
	exit: {
		left: 60,
	},
});
