import { colors } from 'constants/colors';
import React from 'react';
import {
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

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
			<View style={styles.count}>
				<Text style={styles.countText}>{count}</Text>
			</View>
			<TouchableOpacity
				hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
				onPress={onIncrement}
				style={styles.right}
			>
				<Text style={styles.buttonText}>+</Text>
			</TouchableOpacity>
			<View>
				<TouchableOpacity onPress={onDecrement} style={styles.left}>
					<View>
						<Text style={styles.buttonText}>—</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ItemCounter;

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	left: {
		width: 30,
		height: 24,
		paddingVertical: 2,
		paddingHorizontal: 7.5,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		borderColor: colors.leghtGrey,
		borderWidth: 1,
	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: 18,
		color: colors.leghtGrey1,
	},
	count: {
		width: 30,
		height: 24,
		borderColor: colors.leghtGrey,
		backgroundColor: colors.leghtGrey,
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	right: {
		width: 30,
		height: 24,
		borderColor: colors.leghtGrey,
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
	},
	countText: {
		fontSize: 12,
		fontWeight: '400',
		color: colors.neutralDark,
	},
});
