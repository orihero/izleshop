import React from 'react';

import {
	StyleSheet,
	Image,
	View,
	Text,
	ListRenderItemInfo,
} from 'react-native';
import Pressable from '../general/Pressable';
import Rating from './Rating';

import {
	decrementCount,
	incrementCount,
	removeFromCart,
} from 'store/slices/cartSlice';

import { colors } from 'constants/colors';
import { CloseIcon, HeartIcon, CartIcon } from 'assets/icons/icons';
import ItemCounter from './ItemCounter';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import {
	addItem,
	removeItem,
	selectFavorites,
} from 'store/slices/favoritesSlice';

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
}

const HorizontalItem = ({
	item,
	hasCounter,
	hasRating,
	hasBasket,
}: IHorizontalItemProps) => {
	const {
		id,
		title,
		newPrice,
		oldPrice,
		currency,
		ratingCount,
		rating,
		status,
		// isFavorite,
		isInCart,
		img,
	} = item.data || {};

	const dispatch = useAppDispatch();

	let favorites = useAppSelector(selectFavorites);
	let isFavorite = !!favorites[item.data && id];

	let onLike = () => {
		console.log('onLike');
	};

	let onRemove = () => {
		console.log('onRemovePress');
		dispatch(removeFromCart(id.toString()));
	};

	let onIncrement = () => {
		console.log('onIncrementPress');
		dispatch(incrementCount(id.toString()));
	};

	let onDecrement = () => {
		console.log('onDecrementPress');
		if (item.count - 1 <= 0) {
			onRemove();
		} else {
			dispatch(decrementCount(id.toString()));
		}
	};

	return item && item.data ? (
		<View style={styles.container}>
			<View style={styles.imgCont}>
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
					<Text
						style={styles.text4}
					>{`${newPrice} ${currency}`}</Text>
				</View>
				{hasRating ? (
					<Rating defaultStyle active={rating} count={ratingCount} />
				) : null}
				{hasCounter ? (
					<ItemCounter
						count={item.count}
						onDecrement={onDecrement}
						onIncrement={onIncrement}
					/>
				) : null}
			</View>
			<View style={styles.rightEdge}>
				<Pressable onPress={onRemove}>
					<View style={styles.square}>
						<CloseIcon size={15} color={'rgba(0,0,0,.3)'} />
					</View>
				</Pressable>
				<View style={styles.irow}>
					{hasBasket ? (
						<Pressable onPress={onLike}>
							<View style={[styles.square, styles.mr10]}>
								<CartIcon
									size={20}
									color={colors.blue}
									active={isInCart}
								/>
							</View>
						</Pressable>
					) : null}
					<Pressable onPress={onLike}>
						<View style={styles.square}>
							<HeartIcon
								size={20}
								color={colors.red}
								active={isFavorite}
							/>
						</View>
					</Pressable>
				</View>
			</View>
		</View>
	) : null;
};

export default HorizontalItem;

const styles = StyleSheet.create({
	container: {
		padding: 15,
		// marginTop: 10,
		borderRadius: 15,
		flexDirection: 'row',
		backgroundColor: colors.white,
		justifyContent: 'space-between',
	},
	imgCont: {
		width: 90,
		height: 90,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
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
	},
	text4: {
		fontSize: 18,
		marginTop: 3,
		lineHeight: 21,
		fontWeight: '800',
		color: colors.blue,
	},
	rightEdge: {
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	irow: {
		flexDirection: 'row',
	},
	square: {
		width: 30,
		height: 30,
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
