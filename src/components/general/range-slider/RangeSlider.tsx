import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Label from './Label';
import Notch from './Notch';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Thumb from './Thumb';

const RangeSlider = () => {
	const [low, setLow] = useState(0);
	const [high, setHigh] = useState(0);
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
			<RangeSlider
				min={0}
				max={100}
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

export default RangeSlider;

const styles = StyleSheet.create({});
