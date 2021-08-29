import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { StarIcon } from '../../../../assets/icons/icons';
import { colors } from '../../../../constants/colors';

export interface RatingProps {
	count?: number;
	active?: number;
	readOnly?: boolean;
}

const Rating = ({ count = 5, active = 3, readOnly = false }: RatingProps) => {
	const [activeCount, setActiveCount] = useState(active);
	let onStarPress = (count: number) => {
		setActiveCount(count);
	};
	let arr = [...Array(count)];
	return (
		<View style={styles.container}>
			{arr.map((_, i) => {
				return (
					<TouchableWithoutFeedback
						onPress={
							readOnly ? undefined : () => onStarPress(i + 1)
						}
						key={i}
					>
						<StarIcon
							color={
								i < activeCount ? colors.yellow : colors.gray
							}
							active={i < activeCount}
							size={20}
							style={styles.iconStyle}
						/>
					</TouchableWithoutFeedback>
				);
			})}
		</View>
	);
};

export default Rating;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginLeft: 20,
		paddingTop: 8,
	},
	iconStyle: {
		marginHorizontal: 1,
	},
});
