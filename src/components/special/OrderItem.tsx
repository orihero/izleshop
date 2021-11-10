import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { orderItems } from 'mockup/data';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'?

export interface OrderItemProps {
	item: typeof orderItems[0];
}

const OrderItem = ({ item }: OrderItemProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.img}>
				<Image source={item.img} />
			</View>
			<View style={styles.boxText}>
				<Text style={styles.text}>{item.product?.name}</Text>
				<Text style={styles.sumText}>
					{item.product?.price} - {item.amount} шт
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
		paddingRight: 10,
		width: 99,
		alignItems: 'center',
	},
	boxText: {},
	text: {
		fontSize: 15,
		fontWeight: '600',
		alignItems: 'center',
	},
	sumText: {
		paddingTop: 10,
		fontSize: 15,
		fontWeight: '800',
		lineHeight: 17,
		alignItems: 'center',
	},
});
