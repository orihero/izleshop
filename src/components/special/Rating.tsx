import React, { useState } from 'react';

import {
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

import { StarIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';

export interface RatingProps {
	count?: number;
	activeCount?: number;
	readOnly?: boolean;
	styleChanged?: boolean;
	defaultStyle?: boolean;
	size?: number;
	setActiveCount: (num: number) => void;
}

const Rating = ({
	count = 5,
	activeCount = 3,
	size = 18,
	readOnly = false,
	styleChanged = false,
	defaultStyle = false,
	setActiveCount = (n): void => {},
}: RatingProps) => {
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
					<TouchableOpacity
						onPress={
							readOnly ? undefined : () => onStarPress(i + 1)
						}
						key={i}
					>
						<StarIcon
							size={size}
							style={styles.mh3}
							active={i < activeCount}
							color={
								i < activeCount ? colors.yellow : colors.gray
							}
						/>
					</TouchableOpacity>
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
