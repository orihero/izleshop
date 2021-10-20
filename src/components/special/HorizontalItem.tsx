import { CartIcon, HeartIcon, TrashIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';
import React, { useState } from 'react';
import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	Text,
	Touchable,
	TouchableOpacity,
	View,
} from 'react-native';
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
import Pressable from '../general/Pressable';
import ItemCounter from './ItemCounter';
import Rating from './Rating';

export interface IHorizontalItemModel {
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
	data: IHorizontalItemModel;
	count?: number;
}>;

export interface IHorizontalItemProps {
	item: RenderedItemProps;
	hasCounter?: boolean;
	hasRating?: boolean;
	hasBasket?: boolean;
	hasRemove?: boolean;
}

const HorizontalItem = ({
	item,
	hasCounter,
	hasRating,
	hasBasket,
	hasRemove = true,
}: IHorizontalItemProps) => {
	const { id, title, newPrice, currency, ratingCount, rating, status, img } =
		item.data || item;

	const dispatch = useAppDispatch();

	const [isChecked, setIsChecked] = useState(false);

	let favorites = useAppSelector(selectFavorites);
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
		console.log('INC');

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
	return (
		<View style={styles.container}>
			<View style={styles.imgCont}>
				{hasRemove && (
					<TouchableOpacity onPress={onCheck}  style={styles.checkBox}>
						{isChecked && (
							<Image
								style={styles.imgCheck}
								source={require('../../assets/images/check.png')}
							/>
						)}
					</TouchableOpacity>
				)}
				<Image source={img} style={styles.image} />
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
				{!hasRemove && <Rating count={5} active={4} />}
				<View style={styles.plus}>
					<Text style={styles.text4}>
						{` ${newPrice} ${currency}`}
					</Text>
					{hasRating ? (
						<Rating
							defaultStyle
							active={rating}
							count={ratingCount}
						/>
					) : null}
					{hasCounter ? (
						<ItemCounter
							count={item.count}
							onDecrement={onDecrement}
							onIncrement={onIncrement}
						/>
					) : null}
				</View>
			</View>
			<View style={styles.rightEdge}>
				<Pressable onPress={onLike}>
					<View style={styles.square}>
						<HeartIcon
							size={20}
							color={isFavorite ? colors.red : colors.leghtGrey1}
							active={isFavorite}
						/>
					</View>
				</Pressable>
				<View style={styles.irow}>
					{hasBasket ? (
						<TouchableOpacity onPress={onCartPress}>
							<View style={[styles.square, styles.mr10]}>
								<CartIcon
									size={20}
									color={colors.blue}
									active={isInCart}
								/>
							</View>
						</TouchableOpacity>
					) : null}
					{hasRemove && (
						<TouchableOpacity onPress={onRemove}>
							<View style={styles.square}>
								<TrashIcon size={18} color={'rgba(0,0,0,.3)'} />
							</View>
						</TouchableOpacity>
					)}
				</View>
			</View>
		</View>
	);
};

export default HorizontalItem;

const styles = StyleSheet.create({
	container: {
		padding: 15,
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
		color: colors.neutralDark,
	},
	plus: {
		height: 40,
		flexDirection: 'row',
		flexShrink: 1,
		justifyContent: 'space-between',
		alignItems: 'center', 
	},
	text4: {
		fontSize: 14,
		lineHeight: 21,
		fontWeight: '800',
		color: colors.blue,
		flexDirection: 'row',
		alignItems: 'center',
		textAlignVertical: 'center',
		// flex: 1,
	},
	rightEdge: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	irow: {
		height: 5,
		flexDirection: 'column',
	},
	square: {
		width: 30,
		height: 10,
		paddingTop: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	mr15: {
		marginRight: 15,
	},
	mr10: {
		marginRight: 10,
	},
});
