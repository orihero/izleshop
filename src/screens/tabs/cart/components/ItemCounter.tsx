import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from 'constants/colors';

export interface ItemCounterProps {
	count?: number;
	decrement: () => void;
	increment: () => void;
}

const ItemCounter = ({ count = 1, decrement, increment }: ItemCounterProps) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={decrement} style={styles.left}>
				<Text style={styles.buttonText}>-</Text>
			</TouchableOpacity>
			<View style={styles.count}>
				<Text>{count}</Text>
			</View>
			<TouchableOpacity onPress={increment} style={styles.right}>
				<Text style={styles.buttonText}>+</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ItemCounter;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: 10,
		alignItems: 'center',
	},
	left: {
		paddingVertical: 2,
		paddingHorizontal: 7.5,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		backgroundColor: colors.blue,
	},
	buttonText: {
		fontSize: 18,
		color: colors.white,
	},
	count: {
		marginHorizontal: 5,
		borderColor: colors.blue,
		borderWidth: 1,
		paddingVertical: 3,
		paddingHorizontal: 7.5,
	},
	right: {
		paddingVertical: 2,
		paddingHorizontal: 7.5,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		backgroundColor: colors.blue,
	},
});
