import React from 'react';

import { StyleSheet, Image, View, Text } from 'react-native';
import Pressable from '../general/Pressable';
import Rating from './Rating';

import { colors } from 'constants/colors';
import { CloseIcon, HeartIcon } from 'assets/icons/icons';

interface IOrderItem {
	id: number;
	title: string;
	price: string;
	currency: string;
	rating: number;
	status: string;
	isLiked?: boolean;
	img: any;
}

interface OrderItemProps {
	item: IOrderItem;
}

const OrderItem = ({ item }: OrderItemProps) => {
	const { img } = item || {};

	const onClose = () => {
		console.log('onClosePress');
	};

	const onLike = () => {
		console.log('onLike');
	};

	return item ? (
		<View style={styles.container}>
			<View style={styles.imgCont}>
				<Image source={img} style={styles.image} />
			</View>
			<View style={styles.center}>
				<View style={styles.box}>
					<View style={styles.row}>
						<Text style={styles.text1}>{`ID: ${item.id}`}</Text>
						<Text style={styles.text2}>{item.status}</Text>
					</View>
					<Text
						style={styles.text3}
						numberOfLines={2}
						lineBreakMode={'tail'}
					>
						{item.title}
					</Text>
					<Text
						style={styles.text4}
					>{`${item.price} ${item.currency}`}</Text>
				</View>
				<Rating defaultStyle />
			</View>
			<View style={styles.rightEdge}>
				<Pressable onPress={onClose}>
					<CloseIcon size={15} color={'rgba(0,0,0,.3)'} />
				</Pressable>
				<Pressable onPress={onLike}>
					<HeartIcon
						size={20}
						color={colors.red}
						active={item.isLiked}
					/>
				</Pressable>
			</View>
		</View>
	) : null;
};

export default OrderItem;

const styles = StyleSheet.create({
	container: {
		padding: 15,
		marginTop: 10,
		borderRadius: 15,
		flexDirection: 'row',
		backgroundColor: colors.white,
		justifyContent: 'space-between',
	},
	imgCont: {
		width: 90,
	},
	image: {
		width: '100%',
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
});
