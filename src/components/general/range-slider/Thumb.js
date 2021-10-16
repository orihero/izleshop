import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

const THUMB_RADIUS = 10;

const Thumb = () => {
	return <View style={styles.root} />;
};

const styles = StyleSheet.create({
	root: {
		width: THUMB_RADIUS * 2,
		height: THUMB_RADIUS * 2,
		borderRadius: THUMB_RADIUS,
		borderColor: colors.blueLight,
		backgroundColor: colors.blue,
	},
});

export default memo(Thumb);
