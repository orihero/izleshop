import React, { useState } from 'react';

import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { StarIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';

export interface RatingProps {
	count?: number;
	active?: number;
	readOnly?: boolean;
	styleChanged?: boolean;
	defaultStyle?: boolean;
}

const Rating = ({
	count = 5,
	active = 3,
	readOnly = false,
	styleChanged = false,
	defaultStyle = false,
}: RatingProps) => {
	const [activeCount, setActiveCount] = useState(active);
	let onStarPress = (count: number) => {
		setActiveCount(count);
	};
	let arr = [...Array(count)];
	return (
		<View
			style={[
				styles.container,
				defaultStyle ? null : styleChanged ? styles.mt15 : styles.ds,
			]}
		>
			{arr.map((_, i) => {
				return (
					<TouchableWithoutFeedback
						onPress={
							readOnly ? undefined : () => onStarPress(i + 1)
						}
						key={i}
					>
						<StarIcon
							size={18}
							style={styles.mh3}
							active={i < activeCount}
							color={
								i < activeCount ? colors.yellow : colors.gray
							}
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
	},
	ds: {
		// alignSelf: 'center',
		// marginLeft: 20,
		paddingTop: 8,
	},
	mt15: {
		marginTop: 15,
	},
	mh1: {
		marginHorizontal: 1,
	},
	mh3: {
		marginHorizontal: 3,
	},
});
