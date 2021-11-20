import React, { useCallback, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Label from './Label';
import Notch from './Notch';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Thumb from './Thumb';
import RangeSlider from 'rn-range-slider';
import Text from '../Text';
import { strings } from 'locales/locales';
import { colors } from 'constants/colors';

const CustomRangeSlider = ({ high, low, setLow, setHigh }) => {
	const renderThumb = useCallback(() => <Thumb />, []);
	const renderRail = useCallback(() => <Rail />, []);
	const renderRailSelected = useCallback(() => <RailSelected />, []);
	const renderLabel = useCallback((value) => <Label text={value} />, []);
	const renderNotch = useCallback(() => <Notch />, []);
	const handleValueChange = useCallback((low, high) => {
		setLow(low);
		setHigh(high);
	}, []);
	return (
		<View style={styles.container}>
			<View style={styles.inputBox}>
				<View style={styles.text}>
					<Text>{strings.from} :</Text>
				</View>
				<View style={styles.inputRow}>
					<TextInput keyboardType={'numeric'} style={styles.input} />
					<Text>{strings.soum}</Text>
				</View>
			</View>
			<View style={styles.inputBox}>
				<Text>{strings.to} :</Text>
				<View style={styles.inputRow}>
					<TextInput keyboardType={'numeric'} style={styles.input} />
					<Text>{strings.soum}</Text>
				</View>
			</View>
		</View>
	);
};

export default CustomRangeSlider;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	inputBox: {
		// flexDirection: 'row',
		marginHorizontal: 10,
		justifyContent: 'space-between',
	},
	input: {
		padding: 5,
		marginTop: 5,
		width: 100,
		height: 40,
		color: colors.black,
		borderRadius: 10,
	},
	text: {
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	inputRow: {
		marginTop: 5,
		height: 40,
		padding: 5,
		borderWidth: 1,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
});
