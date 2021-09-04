import React from 'react';
import { Image, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { CloseIcon, HeartIcon, PressableIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';
import {
	addItem,
	removeItem,
	selectFavorites,
} from 'store/slices/favoritesSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { ProductItemModel } from '../../home/components/ProductItem';
import Text from 'components/general/Text';
import {
	decrementCount,
	incrementCount,
	removeFromCart,
} from 'store/slices/cartSlice';
import ItemCounter from './ItemCounter';

const CartItem = ({
	item,
}: ListRenderItemInfo<{ data: ProductItemModel; count: number }>) => {
	let favorites = useAppSelector(selectFavorites);
	let isFavorite = !!favorites[item.data.id];
	let dispatch = useAppDispatch();
	let onHeartPress = () => {
		if (isFavorite) {
			dispatch(removeItem(item.data.id.toString()));
		} else {
			dispatch(addItem(item.data));
		}
	};
	let onRemovePress = () => {
		dispatch(removeFromCart(item.data.id.toString()));
	};

	let increment = () => {
		dispatch(incrementCount(item.data.id.toString()));
	};

	let decrement = () => {
		if (item.count - 1 <= 0) {
			onRemovePress();
		} else {
			dispatch(decrementCount(item.data.id.toString()));
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.absolute}>
				<PressableIcon onPress={onRemovePress}>
					<CloseIcon color={colors.gray} size={15} />
				</PressableIcon>
				<PressableIcon onPress={onHeartPress}>
					<HeartIcon
						active={isFavorite}
						color={colors.red}
						size={20}
						onPress={onHeartPress}
					/>
				</PressableIcon>
			</View>
			<View style={styles.row}>
				<Image
					source={{ uri: item.data.photoUrl }}
					style={styles.image}
				/>
				<View style={styles.details}>
					<View style={styles.row}>
						<Text
							ellipsizeMode="tail"
							style={styles.text}
							numberOfLines={2}
						>
							{item.data.name}
						</Text>
					</View>
					<Text style={styles.newPrice}>{item.data.newPrice}</Text>
					<ItemCounter
						{...{ decrement, increment }}
						count={item.count}
					/>
				</View>
			</View>
		</View>
	);
};

export default CartItem;

const styles = StyleSheet.create({
	details: {
		justifyContent: 'center',
		flex: 1,
		marginLeft: 10,
	},
	row: { flexDirection: 'row' },
	absolute: {
		position: 'absolute',
		right: 10,
		zIndex: 20,
		top: 10,
		justifyContent: 'space-between',
		bottom: 15,
	},
	container: {
		backgroundColor: colors.white,
		marginHorizontal: 20,
		marginVertical: 7.5,
		borderRadius: 15,
		padding: 15,
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
		fontWeight: '600',
		paddingTop: 5,
		flexWrap: 'wrap',
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
	},
});
