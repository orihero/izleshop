import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from 'constants/colors';

export interface ItemCounterProps {
	count?: number;
	onDecrement: () => void;
	onIncrement: () => void;
}

const ItemCounter = ({
	count = 1,
	onDecrement,
	onIncrement,
}: ItemCounterProps) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onDecrement} style={styles.left}>
				<Text style={styles.buttonText}>-</Text>
			</TouchableOpacity>
			<View style={styles.count}>
				<Text>{count}</Text>
			</View>
			<TouchableOpacity onPress={onIncrement} style={styles.right}>
				<Text style={styles.buttonText}>+</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ItemCounter;

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 10,
		paddingLeft: 20,
		marginTop: 20,
		marginLeft: 100,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "center"
	},
	left: {
		width: 30,
		height: 24,
		paddingTop: -20,
		paddingVertical: 2,
		paddingHorizontal: 7.5,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		borderColor: colors.leghtGrey,
		borderWidth: 1,
	},
	buttonText: {
		paddingTop: -60,
		paddingLeft: 4,
		fontWeight: "bold",
		fontSize: 12,
		color: colors.leghtGrey1,
	},
	count: {
		width: 30,
		height: 24,
		paddingTop: -20,
		paddingLeft: 10,
		marginHorizontal: 5,
		borderColor: colors.leghtGrey,
		borderWidth: 1,
		paddingVertical: 3,
		paddingHorizontal: 7.5,
	},
	right: {
		width: 30,
		height: 24,
		paddingTop: -20,
		paddingVertical: 2,
		paddingHorizontal: 7.5,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		borderColor: colors.leghtGrey,
		borderWidth: 1,
	},
});
