import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Label from './Label';
import Notch from './Notch';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Thumb from './Thumb';
import RangeSlider from 'rn-range-slider';
import Text from '../Text';
import { strings } from 'locales/locales';

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
		<View>
			<View style={styles.row}>
				<Text>
					{strings.from}: {low.toLocaleString('ru')} {strings.soum}
				</Text>
				<Text>
					{strings.to}: {high.toLocaleString('ru')} {strings.soum}
				</Text>
			</View>
			<RangeSlider
				min={0}
				max={40000000}
				step={2}
				disableRange={false}
				floatingLabel
				renderThumb={renderThumb}
				renderRail={renderRail}
				renderRailSelected={renderRailSelected}
				renderLabel={renderLabel}
				renderNotch={renderNotch}
				onValueChanged={handleValueChange}
			/>
		</View>
	);
};

export default CustomRangeSlider;

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
});
