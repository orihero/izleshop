import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { orderItems } from 'mockup/data';
import { useAppSelector } from 'utils/hooks';
import { selectUser } from 'store/slices/userSlice';

export interface OrderItemProps {
	item: typeof orderItems[0];
}

const OrderItem = ({ item }: OrderItemProps) => {
	let { dollarRate } = useAppSelector(selectUser);
	let p = (item.product?.price * dollarRate)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	p = p.substr(0, p.length - 2) + '00';

	return (
		<View style={styles.container}>
			<View style={styles.img}>
				<Image
					source={{ uri: item.img }}
					style={{ width: 60, height: 60, resizeMode: 'contain' }}
				/>
			</View>
			<View style={styles.boxText}>
				<Text style={styles.text}>{item.product?.name}</Text>
				<Text style={styles.sumText}>
					{p}- {item.amount} шт
				</Text>
			</View>
		</View>
	);
};

export default OrderItem;

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flexDirection: 'row',
	},
	img: {
		// paddingRight: 6,
		width: 99,
		alignItems: 'center',
	},
	boxText: {
		right: 5,
		// justifyContent: 'center',
	},
	text: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '400',
		alignItems: 'center',
	},
	sumText: {
		paddingTop: 5,
		fontSize: 14,
		fontWeight: '800',
		lineHeight: 17,
		alignItems: 'center',
	},
});
