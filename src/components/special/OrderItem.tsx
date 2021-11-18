import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { orderItems } from 'mockup/data';

export interface OrderItemProps {
	item: typeof orderItems[0];
}

const OrderItem = ({ item }: OrderItemProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.img}>
				<Image
					source={{ uri: item.img }}
					style={{ width: 60, height: 60 }}
				/>
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
